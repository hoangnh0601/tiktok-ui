import { HeaderOnly, DefaultLayout } from '~/layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Coin from '~/pages/Coin';
import Studio from '~/pages/Studio';
import Setting from '~/pages/Setting';

import routes from '~/config/routes';

//Public routes
const publicRoutes = [
  { path: routes.home, components: Home, layout: DefaultLayout },
  { path: routes.following, components: Following, layout: DefaultLayout },
  { path: routes.profile, components: Profile, layout: DefaultLayout },
  { path: routes.upload, components: Upload, layout: HeaderOnly },
  { path: routes.coin, components: Coin, layout: HeaderOnly },
  { path: routes.studio, components: Studio, layout: HeaderOnly },
  { path: routes.setting, components: Setting, layout: HeaderOnly },
  { path: routes.search, components: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
