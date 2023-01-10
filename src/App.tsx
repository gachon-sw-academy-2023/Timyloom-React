import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';

import Onboarding from '@/components/Onboarding/Onboarding';
import Header from '@/components/Header/Header';
import Login from '@/components/Sign/Login';
import SignUp from '@/components/Sign/SignUp';
import theme from '@/styles/theme';
import { DBConfig } from '../DBConfig';
import { initDB } from 'react-indexed-db';

initDB(DBConfig);

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Onboarding />}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
