import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Upload from '~/pages/Upload/Upload';
import HeaderOnly from '~/layout/OnlyHeader/index';
import Search from '~/pages/Search/Search';
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