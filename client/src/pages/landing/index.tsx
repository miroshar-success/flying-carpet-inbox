import React, { useEffect } from 'react';

// components
import Tagline from './Tagline';
import NavBar from './NavBar';
import Hero from './Hero';
import Layouts from './Layouts';
import Pages from './Pages';
import Features from './Features';
import FAQs from './FAQs';
import Footer from './Footer';

// // dummy data
import { layouts, pagesList } from './data';

const Landing = () => {
    useEffect(() => {
        if (document.body) {
            document.body.classList.remove('authentication-bg');
            document.body.classList.add('pb-0');
        }

        return () => {
            if (document.body) document.body.classList.remove('pb-0');
        };
    }, []);

    return (
        <div className="landing">
            {/* tagline */}
            <Tagline />

            {/* navbar */}
            <NavBar />

            {/* hero */}
            <Hero />

            {/* layout demos */}
            <Layouts layouts={layouts} />

            {/* pages demos */}
            <Pages pagesList={pagesList} />

            {/* widgets demos */}
            <Features />

            {/* FAQs */}
            <FAQs />

            {/* footer */}
            <Footer />
        </div>
    );
};

export default Landing;
