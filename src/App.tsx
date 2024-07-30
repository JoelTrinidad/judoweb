import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Techniques from './modules/techniques';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/techniques" element={<Techniques />} />
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
