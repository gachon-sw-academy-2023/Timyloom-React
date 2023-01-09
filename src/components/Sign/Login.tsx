import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import * as S from './SignStyle';
import axios from 'axios';

function Login() {
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });

  const [seePass, setSeePass] = useState(false);
  const { id, password } = inputs; //구조분해할당

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const showPassword = () => {
    const test = document.getElementById('password') as HTMLInputElement;
    test.type === 'password' ? ((test.type = 'text'), setSeePass(true)) : ((test.type = 'password'), setSeePass(false));
  };

  const onSubmit = () => {
    axios
      .post(`/login`, inputs)
      .then((res) => {
        console.log(res);
        switch (res.status) {
          case 200:
            localStorage.setItem('id', `${res.data.id}`);
            document.location.href = '/';
            break;
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  return (
    <S.SignWrapper>
      <S.SignCard>
        <S.SignPanel signStart={true}>
          <S.FormTitle>LOGIN</S.FormTitle>
          <S.InputWrap>
            <S.FormInput name="id" value={id} onChange={onChange} />
            <S.InputTitle value={id} data-placeholder="ID" isReg={true}></S.InputTitle>
          </S.InputWrap>
          <S.InputWrap data-validate="Enter password">
            <S.EyeSvg $see={seePass} onClick={showPassword} />
            <S.FormInput id="password" name="password" type="password" value={password} onChange={onChange} />
            <S.InputTitle value={password} data-placeholder="Password" isReg={true}></S.InputTitle>
          </S.InputWrap>
          <S.SignLink href="/signup">Don’t have an account?</S.SignLink>
          <S.SignBtn onClick={onSubmit}>LOGIN</S.SignBtn>
        </S.SignPanel>
        <S.ImgPanel imgStart={false}></S.ImgPanel>
      </S.SignCard>
    </S.SignWrapper>
  );
}

export default Login;
