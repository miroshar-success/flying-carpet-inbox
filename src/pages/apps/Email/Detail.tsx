import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Dropdown, ButtonGroup, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

// Form Editor
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
// styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// components
import PageTitle from '../../../components/PageTitle';

import LeftBar from './LeftBar';

// dummy data
import { emails } from './data';

// images
import avatarImg from '../../../assets/images/users/avatar-2.jpg';
import avatarImg2 from '../../../assets/images/users/avatar-7.jpg';
import img1 from '../../../assets/images/attached-files/img-1.jpg';
import img2 from '../../../assets/images/attached-files/img-2.jpg';
import img3 from '../../../assets/images/attached-files/img-3.jpg';

interface EmailItems {
    avatar: string;
    subject: string;
    from_name: string;
    from_email: string;
    recieved_on: string;
    attachments: [
        { id: number; name: string; size: string; ext: string },
        { id: number; name: string; size: string; ext: string },
        { id: number; name: string; size: string; ext: string }
    ];
}

// EmailDetail
const EmailDetail = () => {
    const [totalUnreadEmails] = useState<number>(emails.filter((e: any) => e.is_read === false).length);
    const [email] = useState<EmailItems>({
        avatar: avatarImg,
        subject: 'Your elite author Graphic Optimization reward is ready!',
        from_name: 'Steven Smith',
        from_email: 'jonathan@domain.com',
        recieved_on: 'Jul 24, 2019, 5:17 AM',
        attachments: [
            { id: 1, name: 'Hyper-admin-design.zip', size: '2.3MB', ext: '.zip' },
            { id: 2, name: 'Dashboard-design.jpg', size: '0.3MB', ext: '.jpg' },
            { id: 3, name: 'Admin-bug-report.mp4', size: '4.1MB', ext: '.mp4' },
        ],
    });

    const [editorState, setEditorState] = useState<any>();

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
                    { label: 'Email', path: '/apps/email/details' },
                    { label: 'Email Detail', path: '/apps/email/details', active: true },
                ]}
                title={'Email Detail'}
            />

            <Row>
                <Col lg={12}>
                    <div className="email-container">
                        <div className="inbox-leftbar">
                            <Link to="/apps/email/compose" className="btn btn-danger d-block">
                                Compose
                            </Link>
                            <LeftBar showChatDetails={false} totalUnreadEmails={totalUnreadEmails} />
                        </div>

                        <div className="inbox-rightbar p-4">
                            <ButtonGroup className="mb-2 me-1">
                                <OverlayTrigger placement="top" overlay={<Tooltip id="archived">Archived</Tooltip>}>
                                    {({ ref, ...triggerHandler }) => (
                                        <Button ref={ref} {...triggerHandler} variant="light">
                                            <i className="uil uil-archive-alt"></i>
                                        </Button>
                                    )}
                                </OverlayTrigger>
                                <Button variant="light">
                                    <OverlayTrigger placement="top" overlay={<Tooltip id="spam">Spam</Tooltip>}>
                                        <i className="uil uil-exclamation-octagon"></i>
                                    </OverlayTrigger>
                                </Button>
                                <OverlayTrigger placement="top" overlay={<Tooltip id="delete">Delete</Tooltip>}>
                                    <Button variant="light">
                                        <i className="uil uil-trash-alt"></i>
                                    </Button>
                                </OverlayTrigger>
                            </ButtonGroup>

                            <OverlayTrigger placement="bottom" overlay={<Tooltip id="folder">Folder</Tooltip>}>
                                <Dropdown className="btn-group mb-2 me-1">
                                    <Dropdown.Toggle className="cursor-pointer btn btn-light">
                                        <i className="uil uil-folder"></i> <i className="uil uil-angle-down"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Header>Move to :</Dropdown.Header>
                                        <Dropdown.Item>Social</Dropdown.Item>
                                        <Dropdown.Item>Promotions</Dropdown.Item>
                                        <Dropdown.Item>Updates</Dropdown.Item>
                                        <Dropdown.Item>Forums</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </OverlayTrigger>

                            <OverlayTrigger placement="top" overlay={<Tooltip id="labels">Labels</Tooltip>}>
                                <Dropdown className="btn-group mb-2 me-1">
                                    <Dropdown.Toggle className="btn btn-light cursor-pointer">
                                        <i className="uil uil-label"></i> <i className="uil uil-angle-down"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Header>Label as:</Dropdown.Header>
                                        <Dropdown.Item>Social</Dropdown.Item>
                                        <Dropdown.Item>Promotions</Dropdown.Item>
                                        <Dropdown.Item>Updates</Dropdown.Item>
                                        <Dropdown.Item>Forums</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </OverlayTrigger>

                            <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip id="more actions">More Actions</Tooltip>}>
                                <Dropdown className="btn-group mb-2">
                                    <Dropdown.Toggle className="cursor-pointer btn btn-light">
                                        <i className="uil uil-ellipsis-h fs-13"></i> More{' '}
                                        <i className="uil uil-angle-down"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Header>More Options :</Dropdown.Header>
                                        <Dropdown.Item>Mark as Unread</Dropdown.Item>
                                        <Dropdown.Item>Add to Tasks</Dropdown.Item>
                                        <Dropdown.Item>Add Star</Dropdown.Item>
                                        <Dropdown.Item>Mute</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </OverlayTrigger>

                            <div className="mt-2">
                                <h5>Hi Bro, How are you?</h5>

                                <hr />

                                <div className="d-sm-flex mb-4 mt-1">
                                    <img
                                        className="me-2 rounded-circle avatar-sm mb-sm-0 mb-3"
                                        src={email.avatar}
                                        alt={email.from_name}
                                    />
                                    <div className="flex-grow-1">
                                        <small className="float-end">{email.recieved_on}</small>
                                        <h6 className="m-0">{email.from_name}</h6>
                                        <small className="text-muted">From: {email.from_email}</small>
                                    </div>
                                </div>

                                <p>
                                    <b>Hi Bro...</b>
                                </p>
                                <div className="text-muted">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                                        eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                                        montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                                        eu, pretium quis, sem.
                                    </p>
                                    <p>
                                        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                                        vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                                        justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
                                        dapibus. Vivamus elementum semper nisi.
                                    </p>
                                    <p>
                                        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                                        vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat
                                        a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                                        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
                                        ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                        condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
                                        ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                                    </p>
                                </div>

                                <hr />

                                <h6>
                                    {' '}
                                    <i className="fa fa-paperclip mb-2"></i> Attachments <span>(3)</span>{' '}
                                </h6>
                                <Row>
                                    <Col xl={2} sm={4}>
                                        <Link to="#">
                                            {' '}
                                            <img src={img1} alt="attachment" className="img-thumbnail img-responsive" />
                                        </Link>
                                    </Col>
                                    <Col xl={2} sm={4} className="mt-3 mt-sm-0">
                                        <Link to="#">
                                            {' '}
                                            <img src={img2} alt="attachment" className="img-thumbnail img-responsive" />
                                        </Link>
                                    </Col>
                                    <Col xl={2} sm={4} className="mt-3 mt-sm-0">
                                        <Link to="#">
                                            {' '}
                                            <img src={img3} alt="attachment" className="img-thumbnail img-responsive" />
                                        </Link>
                                    </Col>
                                </Row>

                                <div className="d-flex mb-0 mt-5">
                                    <img src={avatarImg2} className="me-3 rounded-circle avatar-sm" alt="" />
                                    <div className="flex-grow-1">
                                        <div className="mb-2">
                                            <Editor
                                                editorState={editorState}
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName mb-3 card"
                                                editorClassName="editorClassName px-2 pt-0"
                                                editorStyle={{ minHeight: '300px' }}
                                                onEditorStateChange={onEditorStateChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="text-end">
                                    <Button variant="primary" className="rounded-pill width-sm">
                                        Send
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default EmailDetail;
