import React from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// actions
import {
    changeLayout,
    changeSidebarTheme,
    changeLayoutWidth,
    changeSidebarType,
    logoutUser,
} from '../../redux/actions';

// store
import { AppDispatch } from '../../redux/store';

// const
import { LayoutTypes, SideBarTheme, LayoutWidth, SideBarTypes } from '../../constants/';

// types
import { LayoutType } from './data';

// images
import brand1 from '../../assets/images/brands/bootstrap.png';
import brand2 from '../../assets/images/brands/html5.png';
import brand3 from '../../assets/images/brands/css3.png';
import brand4 from '../../assets/images/brands/react.png';
import brand5 from '../../assets/images/brands/sass.png';
import brand6 from '../../assets/images/brands/gulp.png';
import brand7 from '../../assets/images/brands/yarn.png';

interface LayoutsProps {
    layouts: LayoutType[];
}

const Layouts = ({ layouts }: LayoutsProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const getLayoutConfig = (layout: string) => {
        switch (layout) {
            case 'Vertical Layout':
                dispatch(logoutUser());
                dispatch(changeLayout(LayoutTypes.LAYOUT_VERTICAL));
                return;
            case 'Horizontal Layout':
                dispatch(logoutUser());
                dispatch(changeLayout(LayoutTypes.LAYOUT_HORIZONTAL));
                return;
            case 'Semi Dark Layout':
                dispatch(logoutUser());
                dispatch(changeLayout(LayoutTypes.LAYOUT_VERTICAL));
                dispatch(changeSidebarTheme(SideBarTheme.LEFT_SIDEBAR_THEME_DARK));
                return;
            case 'Fixed Width(Boxed) Layout':
                dispatch(logoutUser());
                dispatch(changeLayout(LayoutTypes.LAYOUT_VERTICAL));
                dispatch(changeLayoutWidth(LayoutWidth.LAYOUT_WIDTH_BOXED));
                return;
            case 'Condensed Sidenav Layout':
                dispatch(logoutUser());
                dispatch(changeLayout(LayoutTypes.LAYOUT_VERTICAL));
                dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_CONDENSED));
                return;
            default:
                return;
        }
    };

    return (
        <section className="py-5 bg-body border-bottom border-top" id="demos">
            <Container>
                <Row className="py-3">
                    <Col lg={12}>
                        <div className="text-center">
                            <h1>Creative Demos</h1>
                            <p className="text-muted mt-2 fs-15">
                                Multiple navigation layouts and navigation color schemes are available to cater need of
                                any modern web application. <br />
                                We understand that having only html bundle is not enough and so we have developed the
                                React, Angular, Vue and Laravel versions as well.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-2 pb-3">
                    <Col className="text-center">
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id={`tooltip-bs5`}>Bootstrap v5.1.1</Tooltip>}>
                            <img src={brand1} alt="" height="48" className="m-1" />
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-html`}>Html 5</Tooltip>}>
                            <img src={brand2} alt="" height="48" className="m-1" />
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-css`}>CSS 3</Tooltip>}>
                            <img src={brand3} alt="" height="48" className="m-1" />
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-react`}>React</Tooltip>}>
                            <img src={brand4} alt="" height="48" className="m-1" />
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-scss`}>SCSS</Tooltip>}>
                            <img src={brand5} alt="" height="48" className="m-1" />
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-gulp`}>Gulp v4</Tooltip>}>
                            <img src={brand6} alt="" height="48" className="m-1" />
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-yarn`}>Yarn</Tooltip>}>
                            <img src={brand7} alt="" height="48" className="m-1" />
                        </OverlayTrigger>
                    </Col>
                </Row>

                <Row className="mt-3">
                    {(layouts || []).map((item, index) => {
                        return (
                            <Col key={index} xl={4} md={6}>
                                <Card className="border-0">
                                    <Card.Body className="shadow-none text-center">
                                        <Link to={{ pathname: item.pageUrl }} onClick={() => getLayoutConfig(item.name)} rel="noreferrer"
                                            target={item.name === "Dark Layout" ? "_blank" : "_self"}>
                                            <img
                                                src={item.image}
                                                alt=""
                                                className="shadow-sm rounded img-thumbnail animate"
                                            />
                                            <h5 className="mt-3 fs-16">{item.name}</h5>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Layouts;
