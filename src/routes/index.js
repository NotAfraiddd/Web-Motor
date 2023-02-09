import Home from '~/pages/home/home';
import Shop from '~/pages/Shop';
import Galllery from '~/pages/PageGallery/gallery';
import Contact from '~/pages/PageContact/contact';
import User from '~/pages/PageUser/user';
import About from '~/pages/PageAbout/about';
// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/shop', component: Shop },
    { path: '/contact', component: Contact },
    { path: '/gallery', component: Galllery },
    { path: '/user-profile', component: User },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
