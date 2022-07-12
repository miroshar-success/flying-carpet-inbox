import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Dropdown, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

// Form Editor
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// dummy data
import { TaskItemTypes } from './data';

interface TaskProps {
    selectedTask: TaskItemTypes;
}

const Task = ({ selectedTask }: TaskProps) => {
    const [completed, setCompleted] = useState<boolean>(selectedTask.stage === 'Done');
    const [editorState, setEditorState] = useState<any>();

    useEffect(() => {
        const html = `<p>This is a task description with markup support</p> <ul> <li>Select a text to reveal the toolbar.</li> <li>Edit rich document on-the-fly, so elastic!</li> </ul> <p>End of air-mode area</p>`;
        const contentBlock = htmlToDraft(html);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            setEditorState(EditorState.createWithContent(contentState));
        }
    }, []);

    /*
     * mark completd on selected task
     */
    const markCompleted = (e: any) => setCompleted(e.target.checked);

    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <Dropdown className="float-end" align="end">
                            <Dropdown.Toggle as="a" className="cursor-pointer arrow-none text-muted">
                                <i className="uil uil-ellipsis-h"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <i className="uil uil-file-upload me-1"></i>Attachment
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <i className="uil uil-edit me-1"></i>Edit
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <i className="uil uil-file-copy-alt me-1"></i>Mark as Duplicate
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className="text-danger">
                                    <i className="uil uil-trash-alt me-1"></i>Delete
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <div className="form-check float-start">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="completedCheck"
                                checked={completed}
                                onChange={markCompleted}
                            />
                            <label className="form-check-label" htmlFor="completedCheck">
                                Mark as completed
                            </label>
                        </div>
                    </Col>
                </Row>

                <hr className="my-2" />

                <Row>
                    <Col>
                        <h4 className="mt-0">{selectedTask.title}</h4>

                        <Row>
                            <Col xs={6}>
                                <p className="mt-2 mb-1 text-muted">Assigned To</p>
                                <div className="d-flex">
                                    <img
                                        src={selectedTask.assignee_avatar}
                                        alt={selectedTask.assigned_to}
                                        className="rounded-circle me-2"
                                        height="24"
                                    />
                                    <div className="flex-grow-1">
                                        <h5 className="mt-1 fs-14">{selectedTask.assigned_to}</h5>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={6}>
                                <p className="mt-2 mb-1 text-muted">Due Date</p>
                                <div className="d-flex">
                                    <i className="uil uil-schedule text-success me-1"></i>
                                    <div className="flex-grow-1">
                                        <h5 className="mt-1 fs-14">{selectedTask.due_date}</h5>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col>
                                <Editor
                                    toolbarHidden
                                    wrapperClassName="rich-editor-wrapper border border-1 rounded px-2"
                                    editorClassName="rich-editor fs-13"
                                    editorStyle={{ minHeight: '150px' }}
                                    stripPastedStyles={false}
                                    editorState={editorState}
                                />
                            </Col>
                        </Row>

                        <h5 className="mt-4 mb-2 fs-15">Checklists/Sub-tasks</h5>

                        {/* checklists */}
                        {(selectedTask.checklists || []).map((checklist, index) => {
                            return (
                                <div className="form-check mt-1" key={index}>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id={`checklist-${checklist.id}`}
                                        defaultChecked={checklist.completed}
                                    />
                                    <label className="form-check-label" htmlFor={`checklist-${checklist.id}`}>
                                        {checklist.title}
                                    </label>
                                </div>
                            );
                        })}

                        <h5 className="mt-4 mb-2 fs-16">Attachments</h5>

                        {/* attachments */}
                        {(selectedTask.attachments || []).map((f, index) => {
                            return (
                                <Card key={index} className="mb-2 shadow-none border">
                                    <div className="p-1 px-2">
                                        <Row className="align-items-center">
                                            <Col className="col-auto">
                                                <img src={f.image} className="avatar-sm rounded" alt="" />
                                            </Col>
                                            <Col className="ps-0">
                                                <Link to="#" className="text-muted fw-bold">
                                                    {f.filename}
                                                </Link>
                                                <p className="mb-0">{f.size}</p>
                                            </Col>
                                            <Col className="col-auto">
                                                <OverlayTrigger
                                                    placement="bottom"
                                                    overlay={<Tooltip id="download">Download</Tooltip>}>
                                                    <Link
                                                        to="#"
                                                        id="btn-download"
                                                        className="btn btn-link text-muted btn-lg p-0">
                                                        <i className="uil uil-cloud-download fs-14"></i>
                                                    </Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement="bottom"
                                                    overlay={<Tooltip id="delete">Delete</Tooltip>}>
                                                    <Link
                                                        to="#"
                                                        id="btn-download"
                                                        className="btn btn-link text-danger btn-lg p-0">
                                                        <i className="uil uil-multiply fs-14"></i>
                                                    </Link>
                                                </OverlayTrigger>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            );
                        })}

                        <Row className="mt-3">
                            <Col>
                                <h5 className="mb-2 fs-16">Comments</h5>

                                {/* comments */}
                                {(selectedTask.comments || []).map((comment, idx) => (
                                    <React.Fragment key={idx}>
                                        <div key={idx} className="d-flex align-items-start mt-3 p-1">
                                            <img
                                                src={comment.author_avatar}
                                                className="me-2 rounded-circle"
                                                height="36"
                                                alt={comment.author}
                                            />
                                            <div className="flex-grow-1">
                                                <h5 className="mt-0 mb-0 fs-14">
                                                    <span className="float-end text-muted fs-12">
                                                        {comment.posted_on}
                                                    </span>
                                                    {comment.author}
                                                </h5>
                                                <p className="mt-1 mb-0 text-muted">{comment.text}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </React.Fragment>
                                ))}
                            </Col>
                        </Row>

                        {/* add comments */}
                        <Row className="mt-1">
                            <Col>
                                <div className="border rounded">
                                    <form action="#">
                                        <textarea
                                            rows={3}
                                            className="form-control border-0 resize-none"
                                            placeholder="Your comment..."></textarea>
                                        <div className="p-2 bg-light">
                                            <div className="float-end">
                                                <Button variant="success" type="submit" className="btn-sm">
                                                    <i className="uil uil-message me-1"></i>Submit
                                                </Button>
                                            </div>
                                            <div>
                                                <Link to="#" className="btn btn-sm px-1 btn-light">
                                                    <i className="uil uil-cloud-upload"></i>
                                                </Link>
                                                <Link to="#" className="btn btn-sm px-1 btn-light">
                                                    <i className="uil uil-at"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Task;
