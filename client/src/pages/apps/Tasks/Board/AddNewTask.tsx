import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { UseFormHandleSubmit, FieldErrors, Control } from 'react-hook-form';

// components
import ShreyuDatepicker from '../../../../components/Datepicker';
import { FormInput } from '../../../../components/';

interface AddNewTaskProps {
    newTaskModal: boolean;
    toggleNewTaskModal: () => void;
    handleNewTask: (values: any) => void;
    handleSubmit: UseFormHandleSubmit<any>;
    newTaskDetails: any;
    handleDateChange: (date: Date) => void;
    errors: FieldErrors;
    control?: Control<any>;
    register?: any;
}

const AddNewTask = ({
    newTaskModal,
    toggleNewTaskModal,
    handleNewTask,
    handleSubmit,
    newTaskDetails,
    handleDateChange,
    register,
    errors,
    control,
}: AddNewTaskProps) => {
    return (
        <Modal show={newTaskModal} onHide={toggleNewTaskModal} size="lg" centered>
            <Modal.Header closeButton>
                <h4 className="modal-title">Create New Task</h4>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(handleNewTask)} className="px-2">
                    <FormInput
                        name="title"
                        label="Title"
                        placeholder="Enter title"
                        type="text"
                        containerClass="mb-3"
                        register={register}
                        key="title"
                        errors={errors}
                        control={control}
                    />

                    <FormInput
                        name="description"
                        label="Description"
                        type="textarea"
                        containerClass="mb-3"
                        rows="3"
                        register={register}
                        key="description"
                        errors={errors}
                        control={control}
                    />

                    <Row>
                        <Col md={6}>
                            <FormInput
                                name="priority"
                                label="Priority"
                                type="select"
                                containerClass="mb-3"
                                register={register}
                                key="priority"
                                errors={errors}
                                control={control}
                                defaultValue="High">
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </FormInput>
                        </Col>
                        <Col md={6}>
                            <div className="form-group">
                                <label className="form-label">Due Date</label> <br />
                                <ShreyuDatepicker
                                    hideAddon
                                    dateFormat="yyyy-MM-dd"
                                    value={newTaskDetails.dueDate}
                                    onChange={(date) => {
                                        handleDateChange(date);
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>

                    <div className="text-end">
                        <Button variant="light" className="me-1" onClick={toggleNewTaskModal}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Create
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default AddNewTask;
