import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Collapse, OverlayTrigger, Tooltip } from 'react-bootstrap';
import classNames from 'classnames';

// dummy data
import { TaskItemTypes } from './data';

interface TaskProps {
    task: TaskItemTypes;
    selectTask: (task: TaskItemTypes) => void;
    totalTasks: number;
}

const Task = ({ task, selectTask, totalTasks }: TaskProps) => {
    const [completed, setCompleted] = useState<boolean>(task.stage === 'Done');

    /*
     * mark completd on selected task
     */
    const markCompleted = (e: any) => {
        setCompleted(e.target.checked);
        selectTask(task);
    };

    return (
        <>
            <Row
                className={classNames('justify-content-sm-between', {
                    'border-bottom': task.id !== totalTasks,
                    'mt-2': task.id !== 1,
                    'pt-1': task.id !== 1,
                })}>
                <Col lg={6} className="mb-2 mb-lg-0">
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id={`task-${task.id}`}
                            checked={completed}
                            onChange={markCompleted}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={`task-${task.id}`}
                            onClick={() => selectTask(task)}>
                            {task.title}
                        </label>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="d-sm-flex justify-content-between">
                        <div>
                            <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip id={task.assigned_to}>Assigned to {task.assigned_to}</Tooltip>}>
                                <img
                                    src={task.assignee_avatar}
                                    alt=""
                                    className="avatar-xs rounded-circle"
                                    id={`task-avatar-${task.id}`}
                                />
                            </OverlayTrigger>
                        </div>
                        <div className="mt-3 mt-sm-0">
                            <ul
                                className={classNames('list-inline', 'text-sm-end', {
                                    'mb-0': task.id === totalTasks,
                                })}>
                                <li className="list-inline-item pe-1">
                                    <i className="uil uil-schedule me-1"></i> {task.due_date}
                                </li>
                                <li className="list-inline-item pe-1">
                                    <i className="uil uil-align-alt me-1"></i>{' '}
                                    {task.checklists.filter((t) => t.completed).length} / {task.checklists.length}
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
        </>
    );
};

interface TaskSectionState {
    title: string;
    tasks: TaskItemTypes[];
    selectTask: (task: TaskItemTypes) => void;
}

const TaskSection = ({ title, tasks, selectTask }: TaskSectionState) => {
    const [isCollapsed, setISCollapse] = useState<boolean>(true);

    /*
     * toggle task-dropdown
     */
    const toggleTask = () => setISCollapse(!isCollapsed);

    return (
        <>
            <Link className="text-dark" to="#" onClick={toggleTask}>
                <h5 className="mb-0">
                    <i
                        className={classNames('uil', {
                            'uil-angle-down': isCollapsed,
                            'uil-angle-right': !isCollapsed,
                        })}></i>
                    {title} <span className="text-muted fs-14">({tasks.length})</span>
                </h5>
            </Link>
            <Collapse in={isCollapsed}>
                <Card className="mb-0 border-0">
                    <Card.Body>
                        {(tasks || []).map((task, idx) => (
                            <Task selectTask={selectTask} task={task} key={idx} totalTasks={tasks.length} />
                        ))}
                    </Card.Body>
                </Card>
            </Collapse>
        </>
    );
};

export default TaskSection;
