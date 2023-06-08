import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';

import Path from './constants/routes';
import globalStyle from './styles/globals';
import theme from './styles/theme';

const SignupPage = lazy(() => import('./pages/signup'));

const App = () => (
  <BrowserRouter>
    <Global styles={globalStyle} />
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={Path.SIGNUP} element={<SignupPage />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
