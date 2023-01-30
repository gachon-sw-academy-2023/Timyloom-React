import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import * as S from './CardStyle';
import axios from 'axios';
import Button from '@/components/Button/Button';

function LoginCard() {
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const { id, password } = inputs;

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    });
  };

  const handleShowPassword = () => {
    const test = document.getElementById('password') as HTMLInputElement;
    test.type === 'password'
      ? ((test.type = 'text'), setShowPassword(true))
      : ((test.type = 'password'), setShowPassword(false));
  };

  const handleLogin = () => {
    axios
      .post(`/login`, inputs)
      .then((res) => {
        console.log(res);
        switch (res.status) {
          case 200:
            localStorage.setItem('id', `${res.data.id}`);
            document.location.href = '/';
            break;
          case 202:
            Swal.fire({
              title: 'Invalid input.',
              icon: 'error',
              confirmButtonText: '확인',
            });
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <S.SignCard>
      <S.SignPanel signStart={true}>
        <S.FormTitle>LOGIN</S.FormTitle>
        <S.InputContainer>
          <S.InputWrapper>
            <S.InputForm id="id" value={id} onChange={handleInputs} data-testid="id-input" />
            <S.InputTitle value={id} data-placeholder="ID" isReg={true}></S.InputTitle>
          </S.InputWrapper>
          <S.InputWrapper data-validate="Enter password">
            <S.EyeIcon $isShow={showPassword} onClick={handleShowPassword} data-testid="eye-svg" />
            <S.InputForm
              id="password"
              type="password"
              value={password}
              onChange={handleInputs}
              data-testid="pw-input"
            />
            <S.InputTitle value={password} data-placeholder="Password" isReg={true}></S.InputTitle>
          </S.InputWrapper>
        </S.InputContainer>
        <S.SignLink href="/signup">Don’t have an account?</S.SignLink>
        <Button onClick={handleLogin} size="lg" themes="sign" data-testid="login-button">
          LOGIN
        </Button>
      </S.SignPanel>
      <S.ImgPanel imgStart={false}></S.ImgPanel>
    </S.SignCard>
  );
}

export default LoginCard;
