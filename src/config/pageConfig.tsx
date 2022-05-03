import HomePage from '../pages/HomePage'
import BackPage from '../pages/BackPage'
import Blog from '../pages/Blog'
import Picture from '../pages/Picture'

export type mainCfgType = {
    'title': string,
    'path': string,
    'content': JSX.Element
}

export const homePage: mainCfgType = {
    title: 'Home',
    path: '/',
    content: <div>Home page</div>
}

export const  mainMenuCfg: mainCfgType[]  = [
    {
        title: 'Blogs',
        path: '/blogs',
        content: <Blog />
    },{
        title: 'Pictures',
        path: '/pics',
        content: <Picture />
    },{
        title: 'Back Page',
        path: '/backpage',
        content: <BackPage />
    }
]

export const profileMenu = [
    'Dashboard', 
    'Account',
    'Logout'
]