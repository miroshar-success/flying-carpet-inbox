import React from 'react';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import cardImg from '../../assets/images/small/img-1.jpg';
import cardImg2 from '../../assets/images/small/img-2.jpg';
import cardImg3 from '../../assets/images/small/img-6.jpg';
import cardImg4 from '../../assets/images/small/img-4.jpg';

const CardWithImage = () => {
    return (
        <Card className="mb-4 mb-xl-0">
            <Card.Img src={cardImg} className="img-fluid" />
            <Card.Body>
                <Card.Title as="h5" className="fs-16">
                    Card title
                </Card.Title>
                <Card.Text className="text-muted">
                    Some quick example text to build on the card title and make up the bulk of the card's content. With
                    supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Link to="#" className="btn btn-primary">
                    Button
                </Link>
            </Card.Body>
        </Card>
    );
};

const CardWithImage2 = () => {
    return (
        <Card className="mb-4 mb-xl-0">
            <Card.Img src={cardImg2} className="img-fluid" />
            <Card.Body>
                <Card.Title as="h5" className="fs-16">
                    Card title
                </Card.Title>
                <Card.Text className="text-muted">Some quick example text to build on the card title.</Card.Text>
            </Card.Body>

            <ListGroup variant="flush" className="text-muted">
                <ListGroup.Item className="text-muted">Dapibus ac facilisis in</ListGroup.Item>
            </ListGroup>

            <Card.Body>
                <Card.Link href="#" className="text-custom">
                    Card link
                </Card.Link>
                <Card.Link href="#" className="text-custom">
                    Another link
                </Card.Link>
            </Card.Body>
        </Card>
    );
};

const HorizontalCards = () => {
    return (
        <>
            <Card>
                <Row className="g-0 align-items-center">
                    <Col md={5}>
                        <Card.Img src={cardImg3} />
                    </Col>

                    <Col md={7}>
                        <Card.Body>
                            <Card.Title as="h5" className="fs-16">
                                Card title
                            </Card.Title>
                            <Card.Text className="text-muted">
                                This is a wider card with supporting text lead-in to additional content.
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row className="g-0 align-items-center">
                    <Col md={7}>
                        <Card.Body>
                            <Card.Title as="h5" className="fs-16">
                                Card title
                            </Card.Title>
                            <Card.Text className="text-muted">
                                This is a wider card with supporting text lead-in to additional content.
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col md={5}>
                        <Card.Img src={cardImg4} />
                    </Col>
                </Row>
            </Card>
        </>
    );
};

const Cards = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="mb-3 mt-0 header-title">Cards</h4>

                <Row className="bg-light p-3">
                    <Col lg={6} xl={3}>
                        <CardWithImage />
                    </Col>
                    <Col lg={6} xl={3}>
                        <CardWithImage2 />
                    </Col>
                    <Col xl={6}>
                        <HorizontalCards />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Cards;
