import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

// Form Editor
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
// styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// components
import PageTitle from '../../../components/PageTitle';
import { VerticalForm, FormInput } from '../../../components/';

import LeftBar from './LeftBar';

// dummy data
import { emails } from './data';

const Compose = () => {
    const [editorState, setEditorState] = useState<any>();
    const [totalUnreadEmails] = useState<number>(emails.filter((e: any) => e.is_read === false).length);

    useEffect(() => {
        const html = `<h3>This is an Air-mode editable area.</h3>
            <ul> 
                <li>Select a text to reveal the toolbar.</li>
                <li>Edit rich document on-the-fly, so elastic!</li>
            </ul>
            <p>End of air-mode area</p>`;
        const contentBlock = htmlToDraft(html);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            setEditorState(EditorState.createWithContent(contentState));
        }
    }, []);

    const schemaResolver = yupResolver(
        yup.object().shape({
            to: yup.string().required('Please specify to email'),
            subject: yup.string().required('Please specify subject'),
        })
    );

    /**
     * Handles the save
     * @param {*} event
     * @param {*} values
     */
    const handleEmailSave = (event: any, values: any) => {
        const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        console.log({ ...values, body });
    };

    /**
     * On editor body change
     */
    const onEditorStateChange = (editorStates: any) => {
        setEditorState(editorStates);
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Email', path: '/apps/email/compose' },
                    { label: 'Compose Email', path: '/apps/email/compose', active: true },
                ]}
                title={'Compose Email'}
            />
            <Row>
                <Col>
                    <div className="email-container">
                        <div className="inbox-leftbar">
                            <Link to="/apps/email/inbox" className="btn btn-danger d-block">
                                Inbox
                            </Link>
                            <LeftBar showChatDetails={false} totalUnreadEmails={totalUnreadEmails} />
                        </div>

                        <div className="inbox-rightbar p-4">
                            <div>
                                <VerticalForm onSubmit={handleEmailSave} resolver={schemaResolver}>
                                    <FormInput type="email" name="to" placeholder="To" containerClass={'mb-3'} />
                                    <FormInput
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        containerClass={'mb-3'}
                                    />

                                    <div className="mb-3 card border-0">
                                        <Editor
                                            editorState={editorState}
                                            toolbarClassName="toolbarClassName"
                                            wrapperClassName="wrapperClassName border border-1 border-soft-dark mb-3 card"
                                            editorClassName="editorClassName px-2 pt-0"
                                            editorStyle={{ minHeight: '300px' }}
                                            onEditorStateChange={onEditorStateChange}
                                        />
                                    </div>

                                    <div className="mb-3 pt-2">
                                        <div className="text-end">
                                            <Button variant="success" className="me-1">
                                                <i className="uil uil-envelope-edit"></i> Draft
                                            </Button>
                                            <Button type="submit">
                                                {' '}
                                                <span>Send</span>
                                                <i className="uil uil-message ms-2"></i>
                                            </Button>
                                        </div>
                                    </div>
                                </VerticalForm>
                            </div>
                        </div>

                        <div className="clearfix"></div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Compose;
