import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './modules/core/home';
import Techniques from './modules/techniques';
import Layout from './modules/core/components/layout';
import Glossary from './modules/glossary';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/techniques" element={<Techniques />} />
        <Route path="/glossary" element={<Glossary />} />
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
