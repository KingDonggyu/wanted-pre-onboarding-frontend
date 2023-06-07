import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';

import Path from './constants/routes';
import globalStyle from './styles/globals';

const SignupPage = lazy(() => import('./pages/signup'));

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Routes>
        <Route path={Path.SIGNUP} element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
