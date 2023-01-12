import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';

import Onboarding from '@/components/Onboarding/Onboarding';
import Header from '@/components/Header/Header';
import Login from '@/components/Sign/Login';
import SignUp from '@/components/Sign/SignUp';
import Workspace from '@/components/Workspace/Workspace';
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
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
