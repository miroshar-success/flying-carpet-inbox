import React from 'react';
import { Link } from 'react-router-dom';

// images
import img1 from '../../../../assets/images/small/img-2.jpg';
import img2 from '../../../../assets/images/small/img-3.jpg';
import img3 from '../../../../assets/images/small/img-4.jpg';
import img4 from '../../../../assets/images/small/img-7.jpg';
import img5 from '../../../../assets/images/small/img-6.jpg';

const Attachments = () => {
    return (
        <>
            <h5 className="mb-3">Attached Files :</h5>
            <div>
                <div className="p-2 border rounded mb-3">
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
                <div className="p-2 border rounded mb-3">
                    <div className="d-flex">
                        <div className="avatar-sm fw-bold me-3 flex-shrink-0">
                            <span className="avatar-title rounded bg-soft-primary text-primary">
                                <i className="uil-file-plus-alt fs-18"></i>
                            </span>
                        </div>
                        <div className="flex-grow-1">
                            <Link to="#" className="d-inline-block mt-2">
                                Landing 2.psd
                            </Link>
                        </div>
                        <div className="float-end mt-1">
                            <Link to="#" className="p-2">
                                <i className="uil-download-alt fs-18"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="p-2 border rounded mb-3">
                    <div>
                        <Link to="#" className="d-inline-block m-1">
                            <img src={img1} alt="" className="avatar-lg rounded" />
                        </Link>
                        <Link to="#" className="d-inline-block m-1">
                            <img src={img2} alt="" className="avatar-lg rounded" />
                        </Link>
                        <Link to="#" className="d-inline-block m-1">
                            <img src={img3} alt="" className="avatar-lg rounded" />
                        </Link>
                    </div>
                </div>

                <div className="p-2 border rounded mb-3">
                    <div className="d-flex">
                        <div className="avatar-sm fw-bold me-3 flex-shrink-0">
                            <span className="avatar-title rounded bg-soft-primary text-primary">
                                <i className="uil-file-plus-alt fs-18"></i>
                            </span>
                        </div>
                        <div className="flex-grow-1">
                            <Link to="#" className="d-inline-block mt-2">
                                Logo.psd
                            </Link>
                        </div>
                        <div className="float-end mt-1">
                            <Link to="#" className="p-2">
                                <i className="uil-download-alt fs-18"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-2 border rounded mb-3">
                    <div>
                        <Link to="#" className="d-inline-block m-1">
                            <img src={img4} alt="" className="avatar-lg rounded" />
                        </Link>
                        <Link to="#" className="d-inline-block m-1">
                            <img src={img5} alt="" className="avatar-lg rounded" />
                        </Link>
                    </div>
                </div>

                <div className="p-2 border rounded mb-3">
                    <div className="d-flex">
                        <div className="avatar-sm fw-bold me-3 flex-shrink-0">
                            <span className="avatar-title rounded bg-soft-primary text-primary">
                                <i className="uil-file-plus-alt fs-18"></i>
                            </span>
                        </div>
                        <div className="flex-grow-1">
                            <Link to="#" className="d-inline-block mt-2">
                                Clients.psd
                            </Link>
                        </div>
                        <div className="float-end mt-1">
                            <Link to="#" className="p-2">
                                <i className="uil-download-alt fs-18"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Attachments;
