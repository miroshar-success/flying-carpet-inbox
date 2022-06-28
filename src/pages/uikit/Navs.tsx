import React from 'react';
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';

interface TabContentType {
    id: number;
    title: string;
    icon?: string;
    text: string;
    text2: string;
}

const tabContents: TabContentType[] = [
    {
        id: 1,
        title: 'Home',
        icon: 'uil-home-alt',
        text: `Vakal text here dolor sit amet,consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.Aenean massa.Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                Nulla consequat massa quis enim.`,
        text2: `Donec pede justo, fringilla vel, aliquet nec, vulputate
                eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                justo. Nullam dictum felis eu pede mollis pretium. Integer
                tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim.`,
    },
    {
        id: 2,
        title: 'Profile',
        icon: 'uil-user',
        text: `Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras
                dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                ac, enim.`,
        text2: `Vakal text here dolor sit amet, consectetuer adipiscing
                elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla consequat massa quis enim.`,
    },
    {
        id: 3,
        title: 'Messages',
        icon: 'uil-envelope',
        text: `Vakal text here dolor sit amet,consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.Aenean massa.Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                Nulla consequat massa quis enim.`,
        text2: `Donec pede justo, fringilla vel, aliquet nec, vulputate
                eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                justo. Nullam dictum felis eu pede mollis pretium. Integer
                tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim.`,
    },
];

const NavTabs = () => {
    return (
        <Card>
            <Card.Body>
                <h5 className="header-title mb-3 mt-0">Nav Tabs</h5>

                <Tab.Container defaultActiveKey="Profile">
                    <Nav as="ul" variant="tabs">
                        {(tabContents || []).map((tab, index) => {
                            return (
                                <Nav.Item as="li" key={index}>
                                    <Nav.Link eventKey={tab.title}>
                                        <span className="d-block d-sm-none">
                                            <i className={tab.icon}></i>
                                        </span>
                                        <span className="d-none d-sm-block">{tab.title}</span>
                                    </Nav.Link>
                                </Nav.Item>
                            );
                        })}
                    </Nav>
                    <Tab.Content className="p-3 text-muted">
                        {(tabContents || []).map((tab, index) => {
                            return (
                                <Tab.Pane eventKey={tab.title} id={String(tab.id)} key={index}>
                                    <p>{tab.text}</p>
                                    <p className="mb-0">{tab.text2}</p>
                                </Tab.Pane>
                            );
                        })}
                    </Tab.Content>
                </Tab.Container>
            </Card.Body>
        </Card>
    );
};

const NavPills = () => {
    return (
        <Card>
            <Card.Body>
                <h5 className="header-title mb-4 mt-0">Nav Pills</h5>

                <Tab.Container defaultActiveKey="Profile">
                    <Nav as="ul" justify variant="pills" className="p-1">
                        {(tabContents || []).map((tab, index) => {
                            return (
                                <Nav.Item as="li" key={index}>
                                    <Nav.Link className="cursor-pointer" eventKey={tab.title}>
                                        <span className="d-block d-sm-none">
                                            <i className={tab.icon}></i>
                                        </span>
                                        <span className="d-none d-sm-block">{tab.title}</span>
                                    </Nav.Link>
                                </Nav.Item>
                            );
                        })}
                    </Nav>
                    <Tab.Content className="text-muted">
                        {(tabContents || []).map((tab, index) => {
                            return (
                                <Tab.Pane eventKey={tab.title} id={String(tab.id)} key={index}>
                                    <p>{tab.text}</p>
                                    <p className="mb-0">{tab.text2}</p>
                                </Tab.Pane>
                            );
                        })}
                    </Tab.Content>
                </Tab.Container>
            </Card.Body>
        </Card>
    );
};

const Navs = () => {
    return (
        <Row>
            <Col xl={6}>
                <NavTabs />
            </Col>
            <Col xl={6}>
                <NavPills />
            </Col>
        </Row>
    );
};

export default Navs;
