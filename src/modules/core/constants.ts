export const routes = {
  home: {
    name: 'Home',
    path: '/',
  },
  history: {
    name: 'Historia',
    path: '/history',
  },
  techniques: {
    name: 'Técnicas',
    path: '/techniques',
  },
  glossary: {
    name: 'Glosario',
    path: '/glossary',
  },
};

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

if (!BACKEND_URL) {
  throw new Error(
    'Missing VITE_BACKEND_URL environment variable. Copy .env-example to .env and set it before running the app.'
  );
}
