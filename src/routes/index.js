//Layouts
import { HeaderOnly } from "~/components/Layouts"

import Following from "~/pages/Following"
import Home from "~/pages/Home"
import Profile from "~/pages/Profile"
import Search from "~/pages/Search"
import Upload from "~/pages/upload"


const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/@:nickname', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }