import { DefaultLayout, HeaderOnly } from '~/layout'

import Coin from '~/pages/Coin'
import Following from '~/pages/Following'
import Home from '~/pages/Home'
import Live from '~/pages/Live'
import Profile from '~/pages/Profile'
import Search from '~/pages/Search'
import Setting from '~/pages/Setting'
import Studio from '~/pages/Studio'
import Upload from '~/pages/Upload'

import routes from '~/config/routes'

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
  { path: routes.live, components: Live, layout: DefaultLayout },
]

const privateRoutes = []

export { privateRoutes, publicRoutes }
