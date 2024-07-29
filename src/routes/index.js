//Layout
import Upload from '~/pages/Upload';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import HeaderOnly from '~/components/Layout/HeaderOnly';

import routes from '~/config/routes';
const publicRoutes = [
    {
        path: routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routes.home,
        component: Home,
    },
    {
        path: routes.following,
        component: Following,
    },
    {
        path: routes.profile,
        component: Profile,
        layout: null,
    },
    {
        path: routes.search,
        component: Search,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
