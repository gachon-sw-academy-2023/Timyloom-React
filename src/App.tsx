import Header from '@/components/Header/Header';
import Onboarding from '@/pages/Onboarding/index';
import Login from '@/pages/Auth/Login/index';
import SignUp from '@/pages/Auth/SignUp/index';
import Workspace from '@/pages/Workspace/index';
import BoardPage from '@/pages/Board/index';
import Remove from '@/pages/Remove';
import Sidebar from './components/Sidebar/Sidebar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import colors from '@/styles/colors';
import GlobalStyle from '@/styles/GlobalStyle';
import '@/styles/fonts.css';

import { DBConfig } from '../DBConfig';
import { initDB } from 'react-indexed-db';

initDB(DBConfig);

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <BrowserRouter>
          {window.location.pathname !== '/workspace' && <Header />}
          <Routes>
            <Route path="/" element={<Onboarding />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/workspace/*" element={<Workspace />}></Route>
            <Route path="/board/:boardId" element={<BoardPage />}></Route>
            <Route path="/remove/:boardId" element={<Remove />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
