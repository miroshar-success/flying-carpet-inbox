import React from 'react';
import {
    Col,
    Row,
    InputGroup,
    FormControl,
    ButtonGroup,
    Dropdown,
    Button,
    OverlayTrigger,
    Tooltip,
    Form,
} from 'react-bootstrap';

const TopPanel = () => {
    return (
        <>
            <Row>
                <Col xs={12}>
                    <div className="d-block">
                        <div className="float-lg-end">
                            <div className="d-lg-flex align-items-center mb-2 mt-0">
                                <div className="file-search d-inline-block me-1">
                                    <form>
                                        <InputGroup className="align-items-center">
                                            <i className="bi bi-search icon-search bg-light ms-2"></i>
                                            <FormControl
                                                type="text"
                                                className="search-input bg-light border-0 mt-0"
                                                placeholder="Search Files..."
                                            />
                                        </InputGroup>
                                    </form>
                                </div>

                                <ButtonGroup>
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip id="toggleview">Toggle View</Tooltip>}>
                                        <Button variant="light">
                                            <i className="bi bi-list-ul"></i>
                                        </Button>
                                    </OverlayTrigger>

                                    <Dropdown>
                                        <Dropdown.Toggle variant="light">
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip id="viewoptions">View Options</Tooltip>}>
                                                <span className="text-dark">
                                                    <i className="bi bi-caret-down"></i>
                                                </span>
                                            </OverlayTrigger>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu align="end">
                                            <Dropdown.Item>A - Z</Dropdown.Item>
                                            <Dropdown.Item>Z - A</Dropdown.Item>
                                            <Dropdown.Item>Last Modified</Dropdown.Item>
                                            <Dropdown.Item>First Modified</Dropdown.Item>
                                            <Dropdown.Item>Size</Dropdown.Item>
                                            <Dropdown.Item>Type</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Dropdown>
                                        <Dropdown.Toggle variant="light">
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip id="viewoptions">View Options</Tooltip>}>
                                                <span className="text-dark">
                                                    <i className="bi bi-list"></i>
                                                </span>
                                            </OverlayTrigger>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu align="end">
                                            <Dropdown.Item href="#" className="text-center border-bottom">
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={<Tooltip id="newwindow">New Window</Tooltip>}>
                                                    <i className="bi bi-window me-2 fs-15"></i>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={<Tooltip id="newfolder">New Folder</Tooltip>}>
                                                    <i className="bi bi-folder-plus fs-15"></i>
                                                </OverlayTrigger>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                Edit
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={<Tooltip id="cut">Cut</Tooltip>}>
                                                    <i className="bi bi-scissors mx-2 fs-15"></i>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={<Tooltip id="copy">Copy</Tooltip>}>
                                                    <i className="bi bi-clipboard-check me-2 fs-15"></i>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={<Tooltip id="paste">Paste</Tooltip>}>
                                                    <i className="bi bi-clipboard-data fs-15"></i>
                                                </OverlayTrigger>
                                            </Dropdown.Item>
                                            <Dropdown.Item>Select All</Dropdown.Item>
                                            <Dropdown.Item className="d-flex">
                                                <Form.Check>
                                                    <Form.Check.Input
                                                        type="checkbox"
                                                        className="me-2"
                                                        id="hiddenFiles"
                                                    />
                                                </Form.Check>
                                                Show Hidden Files
                                            </Dropdown.Item>
                                            <Dropdown.Item className="d-flex">
                                                <Form.Check>
                                                    <Form.Check.Input
                                                        type="checkbox"
                                                        className="me-2"
                                                        id="hiddenFiles"
                                                    />
                                                </Form.Check>
                                                Show Sidebar
                                            </Dropdown.Item>
                                            <Dropdown.Item>Help</Dropdown.Item>
                                            <Dropdown.Item>About Files</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </ButtonGroup>
                            </div>
                        </div>

                        <ButtonGroup className="mb-2 me-1">
                            <Button variant="light">
                                <i className="bi bi-arrow-left"></i>
                            </Button>
                            <Button variant="light">
                                <i className="bi bi-arrow-right"></i>
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="mb-2">
                            <Button variant="light">
                                <i className="bi bi-house me-2"></i>Home
                            </Button>
                        </ButtonGroup>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default TopPanel;
