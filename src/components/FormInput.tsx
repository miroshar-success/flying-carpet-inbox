import React, { InputHTMLAttributes } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

import { FieldErrors, Control } from 'react-hook-form';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    startIcon?: any;
    label?: string;
    type?: string;
    name: string;
    comp?: string;
    placeholder?: string;
    register?: any;
    errors?: FieldErrors;
    control?: Control<any>;
    className?: string;
    labelClassName?: string;
    containerClass?: string;
    textClassName?: string;
    refCallback?: any;
    action?: any;
    rows?: string | number;
}

// textual form-controls—like inputs, passwords, textareas etc.
const TextualInput = ({
    type,
    name,
    placeholder,
    register,
    errors,
    comp,
    rows,
    className,
    refCallback,
    ...otherProps
}: FormInputProps) => {
    return (
        <>
            <Form.Control
                type={type}
                placeholder={placeholder}
                name={name}
                as={comp}
                id={name}
                ref={(r: HTMLInputElement) => {
                    if (refCallback) refCallback(r);
                }}
                className={className}
                isInvalid={errors && errors[name] ? true : false}
                {...(register ? register(name) : {})}
                rows={rows}
                {...otherProps}></Form.Control>

            {errors && errors[name] ? (
                <Form.Control.Feedback type="invalid" className="d-block">
                    {errors[name]['message']}
                </Form.Control.Feedback>
            ) : null}
        </>
    );
};

// non-textual checkbox and radio controls
const CheckInput = ({
    type,
    label,
    name,
    placeholder,
    register,
    errors,
    comp,
    rows,
    className,
    refCallback,
    ...otherProps
}: FormInputProps) => {
    return (
        <>
            <Form.Check
                type={type}
                label={label}
                name={name}
                id={name}
                ref={(r: HTMLInputElement) => {
                    if (refCallback) refCallback(r);
                }}
                className={className}
                isInvalid={errors && errors[name] ? true : false}
                {...(register ? register(name) : {})}
                {...otherProps}
            />

            {errors && errors[name] ? (
                <Form.Control.Feedback type="invalid">{errors[name]['message']}</Form.Control.Feedback>
            ) : null}
        </>
    );
};

// handle select controls
const SelectInput = ({
    type,
    label,
    name,
    placeholder,
    register,
    errors,
    comp,
    rows,
    className,
    refCallback,
    ...otherProps
}: FormInputProps) => {
    return (
        <>
            <Form.Select
                type={type}
                label={label}
                name={name}
                id={name}
                ref={(r: HTMLInputElement) => {
                    if (refCallback) refCallback(r);
                }}
                className={className}
                isInvalid={errors && errors[name] ? true : false}
                {...(register ? register(name) : {})}
                {...otherProps}
            />

            {errors && errors[name] ? (
                <Form.Control.Feedback type="invalid">{errors[name]['message']}</Form.Control.Feedback>
            ) : null}
        </>
    );
};

// extend textual form-controls with add-ons
const FormInputGroup = ({
    startIcon,
    type,
    name,
    placeholder,
    comp,
    register,
    errors,
    rows,
    className,
    textClassName,
    refCallback,
    ...otherProps
}: FormInputProps) => {
    return (
        <InputGroup>
            <InputGroup.Text className={textClassName}>{startIcon}</InputGroup.Text>
            {type === 'select' ? (
                <SelectInput
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    refCallback={refCallback}
                    comp={comp}
                    errors={errors}
                    register={register}
                    className={className}
                    rows={rows}
                    {...otherProps}
                />
            ) : (
                <TextualInput
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    refCallback={refCallback}
                    comp={comp}
                    errors={errors}
                    register={register}
                    className={className}
                    rows={rows}
                    {...otherProps}
                />
            )}
        </InputGroup>
    );
};

const FormInput = ({
    startIcon,
    label,
    type,
    name,
    placeholder,
    register,
    errors,
    control,
    className,
    labelClassName,
    containerClass,
    textClassName,
    refCallback,
    action,
    rows,
    ...otherProps
}: FormInputProps) => {
    // handle input type
    const comp = type === 'textarea' ? 'textarea' : type === 'select' ? 'select' : 'input';

    return (
        <>
            {type === 'hidden' ? (
                <input type={type} name={name} {...(register ? register(name) : {})} {...otherProps} />
            ) : (
                <>
                    {type === 'checkbox' || type === 'radio' ? (
                        <Form.Group className={containerClass}>
                            <CheckInput
                                type={type}
                                label={label}
                                name={name}
                                placeholder={placeholder}
                                refCallback={refCallback}
                                errors={errors}
                                register={register}
                                comp={comp}
                                className={className}
                                rows={rows}
                                {...otherProps}
                            />
                        </Form.Group>
                    ) : type === 'select' ? (
                        <Form.Group className={containerClass}>
                            {label ? (
                                <>
                                    <Form.Label className={labelClassName}>{label}</Form.Label>
                                    {action && action}
                                </>
                            ) : null}
                            {startIcon ? (
                                <FormInputGroup
                                    type={type}
                                    startIcon={startIcon}
                                    name={name}
                                    comp={comp}
                                    textClassName={textClassName}
                                    placeholder={placeholder}
                                    refCallback={refCallback}
                                    errors={errors}
                                    register={register}
                                    className={className}
                                    rows={rows}
                                    {...otherProps}
                                />
                            ) : (
                                <SelectInput
                                    type={type}
                                    name={name}
                                    placeholder={placeholder}
                                    refCallback={refCallback}
                                    errors={errors}
                                    register={register}
                                    comp={comp}
                                    className={className}
                                    rows={rows}
                                    {...otherProps}
                                />
                            )}
                        </Form.Group>
                    ) : (
                        <Form.Group className={containerClass}>
                            {label ? (
                                <>
                                    <Form.Label className={labelClassName}>{label}</Form.Label>
                                    {action && action}
                                </>
                            ) : null}
                            {startIcon ? (
                                <FormInputGroup
                                    type={type}
                                    startIcon={startIcon}
                                    name={name}
                                    comp={comp}
                                    textClassName={textClassName}
                                    placeholder={placeholder}
                                    refCallback={refCallback}
                                    errors={errors}
                                    register={register}
                                    className={className}
                                    rows={rows}
                                    {...otherProps}
                                />
                            ) : (
                                <TextualInput
                                    type={type}
                                    name={name}
                                    placeholder={placeholder}
                                    refCallback={refCallback}
                                    errors={errors}
                                    register={register}
                                    comp={comp}
                                    className={className}
                                    rows={rows}
                                    {...otherProps}
                                />
                            )}
                        </Form.Group>
                    )}
                </>
            )}
        </>
    );
};

export default FormInput;
