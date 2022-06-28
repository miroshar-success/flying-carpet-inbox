import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';

import ChatUsers from './ChatUsers';
import ChatArea from './ChatArea';
// dummy data
import { USERS, ChatUserType } from './data';

// ChatApp
const ChatApp = () => {
    const [selectedUser, setSelectedUser] = useState<ChatUserType>(USERS[1]);

    /**
     * On user change
     */
    const onUserChange = (user: ChatUserType) => {
        setSelectedUser(user);
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Apps', path: '/apps/chat' },
                    { label: 'Chat', path: '/apps/chat', active: true },
                ]}
                title={'Chat'}
            />

            <Row>
                <Col lg={5} xxl={3}>
                    <ChatUsers onUserSelect={onUserChange} />
                </Col>
                <Col lg={7} xxl={9}>
                    <ChatArea selectedUser={selectedUser} />
                </Col>
            </Row>
        </>
    );
};

export default ChatApp;
