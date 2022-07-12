import React from 'react';
import classNames from 'classnames';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// types
import { FileItemTypes } from './data';

interface FilesProps {
    files: FileItemTypes[];
}

const Files = ({ files }: FilesProps) => {
    return (
        <>
            <h4 className="mt-1 fs-15 fw-bold text-uppercase">Files</h4>
            {(files || []).map((file, index) => {
                return (
                    <Card key={index} className={classNames('mb-2', 'shadow-none', 'border', { 'mt-3': index === 0 })}>
                        <div className="p-1 px-2">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <img src={file.previewImage} className="avatar-sm rounded" alt="" />
                                </div>
                                <div className="col ps-0">
                                    <Link to="#" className="text-muted fw-bold">
                                        {file.fileName}
                                    </Link>
                                    <p className="mb-0">{file.fileSize}</p>
                                </div>
                                <div className="col-auto">
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip id="file-download">Download</Tooltip>}>
                                        <Link to="#" className="btn btn-link text-muted btn-lg p-0">
                                            <i className="uil uil-cloud-download fs-14"></i>
                                        </Link>
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip id="file-delete">Delete</Tooltip>}>
                                        <Link to="#" className="btn btn-link text-danger btn-lg p-0">
                                            <i className="uil uil-multiply fs-14"></i>
                                        </Link>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                    </Card>
                );
            })}
        </>
    );
};

export default Files;
