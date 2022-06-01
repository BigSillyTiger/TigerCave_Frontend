import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/layout";
import { mainMenuCfg, mainCfgType, homePage } from "./config/pageConfig";

// only for testing
import Gmath from "./pages/GamesLibrary/Gmath";

const routerContent = mainMenuCfg.map((item: mainCfgType) => (
    <Route key={item.title} path={item.path} element={item.content} />
));

function App() {
    return (
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
    );
}

export default App;
