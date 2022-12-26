import About from "~/pages/About/about";
import Home from "~/pages/Home/home";
import Product from "~/pages/Product/product";
import User from "~/pages/User/user";


// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/product', component: Product },
    { path: '/user', component: User },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };