import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';
import FileUploader from '../../components/FileUploader';

const FileUpload = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/forms/upload' },
                    { label: 'File Upload', path: '/forms/upload', active: true },
                ]}
                title={'File Upload'}
            />

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title mt-0 mb-1">Dropzone File Upload</h4>
                            <p className="sub-header">
                                DropzoneJS is an open source library that provides drag’n’drop file uploads with image
                                previews.
                            </p>

                            <FileUploader
                                onFileUpload={(files) => {
                                    console.log('Uploaded files - ', files);
                                }}
                            />

                            <div className="clearfix text-end mt-3">
                                <Button variant="danger">
                                    <i className="uil uil-arrow-right me-1"></i> Submit
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FileUpload;
