// images
import layout1 from '../../assets/images/layouts/vertical-landing.png';
import layout2 from '../../assets/images/layouts/horizontal-landing.png';
import layout3 from '../../assets/images/layouts/dark-landing.png';
import layout4 from '../../assets/images/layouts/vertical-dark-sidebar-landing.png';
import layout5 from '../../assets/images/layouts/boxed-landing.png';
import layout6 from '../../assets/images/layouts/vertical-condensed-landing.png';

import pages1 from '../../assets/images/layouts/pages/profile-page.png';
import pages2 from '../../assets/images/layouts/pages/inbox.png';
import pages3 from '../../assets/images/layouts/pages/pricing.png';
import pages4 from '../../assets/images/layouts/pages/invoice.png';
import pages5 from '../../assets/images/layouts/pages/register.png';
import pages6 from '../../assets/images/layouts/pages/error-404.png';

export interface LayoutType {
    name: string;
    image: string;
    pageUrl: string;
}

export interface pagesListTypes {
    name: string;
    image: string;
    pageUrl: string;
}

const layouts: LayoutType[] = [
    {
        name: 'Vertical Layout',
        image: layout1,
        pageUrl: '/dashboard/ecommerce',
    },
    {
        name: 'Horizontal Layout',
        image: layout2,
        pageUrl: '/dashboard/ecommerce',
    },
    {
        name: 'Dark Layout',
        image: layout3,
        pageUrl: 'http://shreyu-react-dark.coderthemes.com/',
    },
    {
        name: 'Semi Dark Layout',
        image: layout4,
        pageUrl: '/dashboard/ecommerce',
    },
    {
        name: 'Fixed Width(Boxed) Layout',
        image: layout5,
        pageUrl: '/dashboard/ecommerce',
    },
    {
        name: 'Condensed Sidenav Layout',
        image: layout6,
        pageUrl: '/dashboard/ecommerce',
    },
];

const pagesList: pagesListTypes[] = [
    {
        name: 'Profile',
        image: pages1,
        pageUrl: '/pages/profile',
    },
    {
        name: 'Inbox',
        image: pages2,
        pageUrl: '/apps/email/inbox',
    },
    {
        name: 'Pricing',
        image: pages3,
        pageUrl: '/pages/pricing',
    },
    {
        name: 'Invoice',
        image: pages4,
        pageUrl: '/pages/invoice',
    },
    {
        name: 'Register',
        image: pages5,
        pageUrl: '/auth/register',
    },
    {
        name: 'Error-404',
        image: pages6,
        pageUrl: '/error-404',
    },
];

export { layouts, pagesList };
