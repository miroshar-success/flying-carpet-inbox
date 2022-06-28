import React from 'react';
import { Link } from 'react-router-dom';

// images
import avatar1 from '../../../../assets/images/users/avatar-1.jpg';
import avatar2 from '../../../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../../../assets/images/users/avatar-3.jpg';

const Comments = () => {
    return (
        <>
            <h5 className="mb-4 pb-1 header-title">Comments (6)</h5>

            <div className="d-flex mb-4 fs-14">
                <div className="me-3 flex-shrink-0">
                    <Link to="#">
                        <img src={avatar2} className="d-flex-object rounded-circle avatar-sm" alt="" />
                    </Link>
                </div>
                <div className="flex-grow-1">
                    <h5 className="mt-0 fs-15">John Cooks</h5>
                    <p className="text-muted mb-1">
                        <Link to="#" className="text-danger">
                            @Rick Perry
                        </Link>{' '}
                        Their separate existence is a myth.
                    </p>
                    <Link to="#" className="text-primary">
                        Reply
                    </Link>
                </div>
            </div>

            <div className="d-flex mb-4 fs-14">
                <div className="me-3 flex-shrink-0">
                    <Link to="#">
                        <img src={avatar3} className="d-flex-object rounded-circle avatar-sm" alt="" />
                    </Link>
                </div>
                <div className="flex-grow-1">
                    <h5 className="mt-0 fs-15">Jayden Dowie</h5>
                    <p className="text-muted mb-1">
                        <Link to="#" className="text-danger">
                            @Rick Perry
                        </Link>{' '}
                        It will be as simple as occidental in fact be Occidental will seem like simplified.
                    </p>
                    <Link to="#" className="text-primary">
                        Reply
                    </Link>

                    <div className="d-flex mt-3 fs-14">
                        <div className="me-3 flex-shrink-0">
                            <Link to="#">
                                <div className="avatar-sm fw-bold d-inline-block m-1">
                                    <span className="avatar-title rounded-circle bg-soft-primary text-primary">R</span>
                                </div>
                            </Link>
                        </div>
                        <div className="flex-grow-1">
                            <h5 className="mt-0 fs-15">Ray Roberts</h5>
                            <p className="text-muted mb-1">
                                <Link to="#" className="text-danger">
                                    @Rick Perry
                                </Link>{' '}
                                Cras sit amet nibh libero.
                            </p>
                            <Link to="#" className="text-primary">
                                Reply
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex mb-4 fs-14">
                <div className="me-3 flex-shrink-0">
                    <Link to="#">
                        <img src={avatar2} className="d-flex-object rounded-circle avatar-sm" alt="" />
                    </Link>
                </div>
                <div className="flex-grow-1">
                    <h5 className="mt-0 fs-15">John Cooks</h5>
                    <p className="text-muted">
                        <Link to="#" className="text-danger">
                            @Rick Perry
                        </Link>{' '}
                        Itaque earum rerum hic.
                    </p>

                    <div className="p-2 border rounded mb-2">
                        <div className="d-flex">
                            <div className="avatar-sm fw-bold me-3 flex-shrink-0">
                                <span className="avatar-title rounded bg-soft-primary text-primary">
                                    <i className="uil-file-plus-alt fs-18"></i>
                                </span>
                            </div>
                            <div className="flex-grow-1">
                                <Link to="#" className="d-inline-block mt-2">
                                    Landing 1.psd
                                </Link>
                            </div>
                            <div className="float-end mt-1">
                                <Link to="#" className="p-2">
                                    <i className="uil-download-alt fs-18"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link to="#" className="text-primary">
                        Reply
                    </Link>
                </div>
            </div>

            <div className="d-flex">
                <div className="me-3 flex-shrink-0">
                    <Link to="#">
                        <img className="d-flex-object rounded-circle avatar-sm" alt="" src={avatar1} />
                    </Link>
                </div>
                <div className="flex-grow-1">
                    <input type="text" className="form-control input-sm" placeholder="Some text value..." />
                </div>
            </div>
        </>
    );
};

export default Comments;
