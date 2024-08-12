import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './modules/core/home';
import Techniques from './modules/techniques';
import Layout from './modules/core/components/layout';
import Glossary from './modules/glossary';
import History from './modules/history';
import { routes } from './modules/core/constants';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={routes.home.path} element={<Home />} />
        <Route path={routes.techniques.path} element={<Techniques />} />
        <Route path={routes.glossary.path} element={<Glossary />} />
        <Route path={routes.history.path} element={<History />} />
      </Route>
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
