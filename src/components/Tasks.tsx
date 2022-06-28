import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import Scrollbar from './Scrollbar';

export interface TaskItemTypes {
    id: number;
    title: string;
    dueDate: string;
}

interface TasksProps {
    tasks: TaskItemTypes[];
}

const Tasks = ({ tasks }: TasksProps) => {
    return (
        <Card>
            <Card.Body>
                <Link to="#" className="btn btn-primary btn-sm float-end">
                    View All
                </Link>
                <h5 className="mb-4 header-title">Tasks</h5>

                <Scrollbar style={{ maxHeight: '352px' }} className="px-1">
                    {(tasks || []).map((item, index) => {
                        return (
                            <div key={index} className="mt-2">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="task1" />
                                    <label className="form-check-label" htmlFor="task1">
                                        {item.title}
                                    </label>
                                    <p className="fs-13 text-muted">Due on {item.dueDate}</p>
                                </div>
                            </div>
                        );
                    })}
                </Scrollbar>
            </Card.Body>
        </Card>
    );
};

export default Tasks;
