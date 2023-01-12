import Header from '@/components/Header/Header';
import Onboarding from '@/pages/Onboarding/index';
import Login from '@/pages/Auth/Login/index';
import SignUp from '@/pages/Auth/SignUp/index';
import Workspace from '@/pages/Workspace/index';
import List from '@/pages/Board/index';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import colors from '@/styles/colors';
import GlobalStyle from '@/styles/GlobalStyle';

import { DBConfig } from '../DBConfig';
import { initDB } from 'react-indexed-db';

initDB(DBConfig);

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Onboarding />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/workspace" element={<Workspace />}></Route>
            <Route path="/list/1" element={<List />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
