import Header from '@/components/Header/Header';
import Onboarding from '@/pages/Onboarding/index';
import Login from '@/pages/Auth/Login/index';
import SignUp from '@/pages/Auth/SignUp/index';
import Workspace from '@/pages/Workspace/index';
import BoardPage from '@/pages/Board/index';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import colors from '@/styles/colors';
import GlobalStyle from '@/styles/GlobalStyle';

import { DBConfig } from '../DBConfig';
import { initDB } from 'react-indexed-db';

import Ref from './pages/Board/Ref';
import Board from './components/Board/Board';

initDB(DBConfig);

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <BrowserRouter>
          {/* {window.location.pathname !== '/workspace' && <Header />} */}
          <Routes>
            <Route path="/" element={<Onboarding />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/workspace" element={<Workspace />}></Route>
            <Route path="/board/:boardId" element={<BoardPage />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
