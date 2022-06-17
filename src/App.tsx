import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
import "./App.css";
import Layout from "./components/layout";
import { mainMenuCfg, mainCfgType, homePage } from "./config/pageConfig";
import { selectTheme } from "./redux_store/features/theme/themeSlice";
import { themeA, themeB } from "./config/themes";

// only for testing
import Gmath from "./pages/GamesLibrary/Gmath";

const routerContent = mainMenuCfg.map((item: mainCfgType) => (
    <Route key={item.title} path={item.path} element={item.content} />
));

function App() {
    return (
        <ThemeProvider theme={themeA}>
            <Router>
                <div className="App">
                    <Layout>
                        <Routes>
                            <Route
                                path={homePage.path}
                                element={homePage.content}
                            />
                            {routerContent}
                            <Route path={"/game-math"} element={<Gmath />} />
                        </Routes>
                    </Layout>
                </div>
            </Router>
        </ThemeProvider>
    );
}

const mapStateToProps = (state: any) => {
    const themeState = selectTheme(state);
    return { themeState };
};

export default connect(mapStateToProps)(App);
