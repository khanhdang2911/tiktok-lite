//Layout
import Upload from '~/pages/Upload';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import HeaderOnly from '~/components/Layout/HeaderOnly';
const publicRoutes = [
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly
    },
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
        layout:null
    },
    {
        path: '/search',
        component: Search,
    },
];
const privateRoutes=[];
export {publicRoutes,privateRoutes};
