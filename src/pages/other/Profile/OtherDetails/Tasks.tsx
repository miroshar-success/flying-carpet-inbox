import React from 'react';
import { Card, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { TaskItemTypes } from '../../../apps/Tasks/List/data';

interface TasksProps {
    tasks: TaskItemTypes[];
}

const Tasks = ({ tasks }: TasksProps) => {
    const totalTasks = tasks.length;

    return (
        <>
            <h4 className="mt-1 fs-15 fw-bold text-uppercase">My Tasks</h4>

            <Card className="mb-0 mt-3 border-0">
                <Card.Body className="p-0">
                    {(tasks || []).map((task, idx) => (
                        <Row
                            key={idx}
                            className={classNames('justify-content-sm-between', {
                                'border-bottom': idx + 1 !== totalTasks,
                                'mt-1': idx + 1 !== 1,
                                'pt-2': idx + 1 !== 1,
                            })}>
                            <Col lg={6} className="mb-2 mb-lg-0">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id={`task-${idx}`} />
                                    <label className="form-check-label" htmlFor={`task-${idx}`}>
                                        {task.title}
                                    </label>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="d-sm-flex justify-content-between">
                                    <div>
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={
                                                <Tooltip id={task.assigned_to}>Assigned to {task.assigned_to}</Tooltip>
                                            }>
                                            <img
                                                src={task.assignee_avatar}
                                                alt=""
                                                className="avatar-xs rounded-circle"
                                                id={`task-avatar-${idx}`}
                                            />
                                        </OverlayTrigger>
                                    </div>
                                    <div className="mt-3 mt-sm-0">
                                        <ul
                                            className={classNames('list-inline', 'text-sm-end', {
                                                'mb-0': idx + 1 === totalTasks,
                                            })}>
                                            <li className="list-inline-item pe-1">
                                                <i className="uil uil-schedule me-1"></i> {task.due_date}
                                            </li>
                                            <li className="list-inline-item pe-1">
                                                <i className="uil uil-align-alt me-1"></i>{' '}
                                                {task.checklists.filter((t) => t.completed).length} /{' '}
                                                {task.checklists.length}
                                            </li>
                                            <li className="list-inline-item pe-2">
                                                <i className="uil uil-comment-message me-1"></i> {task.comments.length}
                                            </li>
                                            <li className="list-inline-item">
                                                <span
                                                    className={classNames(
                                                        'badge',
                                                        {
                                                            'badge-soft-danger': task.priority === 'High',
                                                            'badge-soft-info': task.priority === 'Medium',
                                                            'badge-soft-success': task.priority === 'Low',
                                                        },
                                                        'p-1'
                                                    )}>
                                                    {task.priority}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    ))}
                </Card.Body>
            </Card>
        </>
    );
};

export default Tasks;
