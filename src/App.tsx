import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './modules/core/home';
import Techniques from './modules/techniques';
import Layout from './modules/core/components/layout';
import Glossary from './modules/glossary';
import History from './modules/history';
import { routes } from './modules/core/constants';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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

const queryClient = new QueryClient();

export function WrappedApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <App />
      </HashRouter>
    </QueryClientProvider>
  );
}
