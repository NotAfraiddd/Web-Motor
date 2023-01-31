import About from '~/pages/About/about';
import Home from '~/pages/Home/home';
import Product from '~/pages/Product/product';
import Galllery from '~/pages/Gallery/user';
import Contact from '~/pages/Contact/contact';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/product', component: Product },
    { path: '/contact', component: Contact },
    { path: '/gallery', component: Galllery },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
