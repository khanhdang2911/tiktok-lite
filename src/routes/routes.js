//layouts
import Upload from '~/pages/Upload';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import HeaderOnly from '~/layouts/HeaderOnly';

import config from '~/config';
const publicRoutes = [
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
        layout: null,
    },
    {
        path: config.routes.search,
        component: Search,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
