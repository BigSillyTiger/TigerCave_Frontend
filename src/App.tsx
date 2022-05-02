import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Layout from "./components/layout";
import {mainMenuCfg, mainCfgType} from './config/pageConfig'

const routerContent = mainMenuCfg.map((item: mainCfgType) => (
  <Route key={item.title} path={item.path} element={item.content} />
))

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            {routerContent}
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
