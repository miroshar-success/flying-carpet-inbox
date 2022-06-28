import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FAQs = () => {
    return (
        <section className="py-5 bg-body border-bottom">
            <Container>
                <Row>
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h1>
                                Frequently Asked <span className="text-primary">Questions</span>
                            </h1>
                            <p className="text-muted mt-2">
                                Here are some of the basic types of questions for our customers. For more <br />
                                information please contact us.
                            </p>
                        </div>
                    </div>
                </Row>

                <Row className="mt-5 mb-3">
                    <Col lg={{ span: 5, offset: 1 }}>
                        <div>
                            <h4 className="faq-question text-body fs-17">Q. Can I use this template for my client?</h4>
                            <p className="faq-answer mb-4 pb-1 text-muted fs-15">
                                Yup, the marketplace license allows you to use this theme in any end product.For more
                                information on licenses, please refer here
                            </p>
                        </div>

                        <div className="pt-3">
                            <h4 className="faq-question text-body fs-17">Q. How do I get help with the theme?</h4>
                            <p className="faq-answer mb-4 pb-1 text-muted fs-15">
                                Use our dedicated support email (support@coderthemes.com) to send your issues or
                                feedback. We are here to help anytime.
                            </p>
                        </div>
                    </Col>

                    <Col lg={5}>
                        <div>
                            <h4 className="faq-question text-body fs-17">Q. Can this theme work with Wordpress?</h4>
                            <p className="faq-answer mb-4 pb-1 text-muted fs-15">
                                No. This is a HTML template. It won't work directly with wordpress. However you can
                                convert this into wordpress compatible theme.
                            </p>
                        </div>

                        <div className="pt-3">
                            <h4 className="faq-question text-body fs-17">
                                Q. Will you regularly give updates of Shreyu?
                            </h4>
                            <p className="faq-answer mb-4 pb-1 text-muted fs-15">
                                Yes, We will update the Shreyu regularly. All the future updates would be available
                                without any cost.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FAQs;
