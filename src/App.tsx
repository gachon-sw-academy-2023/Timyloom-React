import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

import Onboarding from '@/components/Onboarding/Onboarding';
import Header from '@/components/Header/Header';
import Login from '@/components/Sign/Login';
import SignUp from '@/components/Sign/SignUp';

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Onboarding />}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
