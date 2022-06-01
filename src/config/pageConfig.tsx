import HomePage from "../pages/HomePage";
import BackPage from "../pages/BackPage";
import Games from "../pages/GamePage";
import Blog from "../pages/Blog";
import Picture from "../pages/Picture";

export type mainCfgType = {
    title: string;
    path: string;
    content: JSX.Element;
};

export const homePage: mainCfgType = {
    title: "Home",
    path: "/",
    content: <div>Home page</div>,
};

export const mainMenuCfg: mainCfgType[] = [
    {
        title: "Blogs",
        path: "/blogs",
        content: <Blog />,
    },
    {
        title: "Pictures",
        path: "/pics",
        content: <Picture />,
    },
    {
        title: "Games",
        path: "/games",
        content: <Games />,
    },
];

export const profileMenu = ["Dashboard", "Account", "Logout"];

export const Roar_Menu_Config = [
    { id: "all", admin: false },
    { id: "pics", admin: false },
    { id: "words", admin: false },
    { id: "articles", admin: false },
    { id: "archive", admin: true },
];

export type roar_menu_items = "all" | "pics" | "words" | "articles" | "archive";
