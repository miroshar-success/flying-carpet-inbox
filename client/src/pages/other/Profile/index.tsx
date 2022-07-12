import React from 'react';
import { Col, Row } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';

import PersonalDetails from './PersonalDetails';
import OtherDetails from './OtherDetails';

// dummy data
import { userInfo } from './data';

const Profile = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Pages', path: '/pages/profile' },
                    { label: 'Profile', path: '/pages/profile', active: true },
                ]}
                title={'Profile'}
            />

            <Row>
                <Col lg={4} xl={3}>
                    <PersonalDetails userInfo={userInfo} />
                </Col>

                <Col lg={8} xl={9}>
                    <OtherDetails />
                </Col>
            </Row>
        </>
    );
};

export default Profile;
