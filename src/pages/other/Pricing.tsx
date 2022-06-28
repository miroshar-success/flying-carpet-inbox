import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import FeatherIcons from 'feather-icons-react';

// components
import PageTitle from '../../components/PageTitle';

// dummy data
import { pricingPlans, PlanItemsTypes } from './data';

interface PricingCardProps {
    pricingPlans: PlanItemsTypes[];
}

const PricingCard = ({ pricingPlans }: PricingCardProps) => {
    return (
        <Row>
            {(pricingPlans || []).map((plan, idx) => {
                return (
                    <Col lg={4} key={idx}>
                        <Card className="card-pricing">
                            <Card.Body className="p-4">
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <h5 className="mt-0 mb-2 fs-16">{plan.name}</h5>
                                        <h2 className="mt-0 mb-2">
                                            ${plan.price} <span className="fs-14">/ {plan.duration}</span>
                                        </h2>
                                    </div>
                                    <div className="align-self-center flex-shrink-0">
                                        <FeatherIcons icon={plan.icon} className="icon-dual icon-lg"></FeatherIcons>
                                    </div>
                                </div>

                                <ul className="card-pricing-features text-muted border-top pt-2 mt-2 ps-0 list-unstyled">
                                    {(plan.features || []).map((feature, idx1) => {
                                        return (
                                            <li key={idx1}>
                                                <i className="uil uil-check text-success fs-15 me-1"></i>
                                                {feature}
                                            </li>
                                        );
                                    })}
                                </ul>

                                <div className="mt-5 text-center">
                                    <Button
                                        variant={plan.isRecommended ? 'primary' : 'soft-primary'}
                                        className="px-sm-4">
                                        <i className="uil uil-arrow-right me-1"></i>Buy Now for ${plan.price}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
};

// Pricing component
const Pricing = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Pages', path: '/pages/pricing' },
                    { label: 'Pricing', path: '/pages/pricing', active: true },
                ]}
                title={'Pricing'}
            />

            <Row className="justify-content-center">
                <Col xl={10}>
                    <div className="text-center my-4">
                        <h3>Simple pricing for Everyone</h3>
                        <p className="text-muted">Fully functional accounts are starting from $19/month only</p>
                    </div>

                    {/* pricing cards */}
                    <PricingCard pricingPlans={pricingPlans} />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Pricing;
