import React, { useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// store
import { RootState } from '../../redux/store';

// images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

const NavBar = () => {
    const { user, userLoggedIn } = useSelector((state: RootState) => ({
        user: state.Auth.user,
        loading: state.Auth.loading,
        error: state.Auth.error,
        userLoggedIn: state.Auth.userLoggedIn,
    }));

    // on scroll add navbar class
    useEffect(() => {
        // manage scroll
        const navbar = document.getElementById('nav-menu');
        window.addEventListener('scroll', (e) => {
            e.preventDefault();
            if (navbar) {
                if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                    navbar.classList.add('nav-sticky', 'shadow');
                } else {
                    navbar.classList.remove('nav-sticky', 'shadow');
                }
            }
        });
    }, []);

    return (
        <>
            <Navbar collapseOnSelect expand={'lg'} className="py-lg-2 mb-2 sticky-top" id="nav-menu">
                <Container>
                    <div className="auth-logo me-lg-5">
                        <Link to="/" className="logo logo-dark">
                            <span className="logo-lg">
                                <img src={logoDark} alt="" className="me-2" height="24" />
                            </span>
                        </Link>

                        <Link to="/" className="logo logo-light">
                            <span className="logo-lg">
                                <img src={logoLight} alt="" className="me-2" height="24" />
                            </span>
                        </Link>
                    </div>

                    <Navbar.Toggle
                        className="shadow-none border-0 px-0 text-dark"
                        aria-controls="responsive-navbar-nav">
                        <i className="uil uil-bars"></i>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* left menu */}
                        <Nav as="ul" className="me-auto align-items-center"></Nav>

                        {/* right menu */}
                        <Nav as="ul" className="ms-auto align-items-lg-center fs-16 fw-bold">
                            <Nav.Item as="li" className="mx-lg-1">
                                <Nav.Link href="#demos" className="text-dark link-demos">
                                    Demos
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="mx-lg-1">
                                {userLoggedIn || user ? (
                                    <Nav.Link as={Link} to="/auth/logout" className="text-dark link-demos">
                                        Logout
                                    </Nav.Link>
                                ) : (
                                    <Nav.Link as={Link} to="/auth/login" className="text-dark link-demos">
                                        Login
                                    </Nav.Link>
                                )}
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
