import About from '~/pages/About/about';
import Home from '~/pages/Home/home';
import Product from '~/pages/Product/product';
import Galllery from '~/pages/Gallery/user';
import Contact from '~/pages/Contact/contact';
import User from '~/pages/User/user';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/product', component: Product },
    { path: '/contact', component: Contact },
    { path: '/gallery', component: Galllery },
    { path: '/user-profile', component: User },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
