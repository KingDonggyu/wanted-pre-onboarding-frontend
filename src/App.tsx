import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';

import Path from './constants/routes';
import globalStyle from './styles/globals';
import theme from './styles/theme';

const HomePage = lazy(() => import('./pages/home'));
const SignupPage = lazy(() => import('./pages/signup'));
const SigninPage = lazy(() => import('./pages/signin'));
const TodoPage = lazy(() => import('./pages/todo'));

const App = () => (
  <BrowserRouter>
    <Global styles={globalStyle} />
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={Path.HOME} element={<HomePage />} />
        <Route path={Path.SIGNUP} element={<SignupPage />} />
        <Route path={Path.SIGNIN} element={<SigninPage />} />
        <Route path={Path.TODO} element={<TodoPage />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
