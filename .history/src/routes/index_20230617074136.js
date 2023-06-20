import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload/Upload';
import HeaderOnly from '~/layout/OnlyHeader';
import Search from '~/pages/Search';
import routes from '~/config/routes';
// public routes
const publicRoute = [
    { path: routes.home, component: Home },
    { path: routes.following, component: Following },
    { path: routes.upload, component: Upload, layout: HeaderOnly },
    { path: routes.search, component: Search, layout: null },
]
const privateRoute = [

]
export { publicRoute, privateRoute }