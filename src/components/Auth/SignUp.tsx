import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import * as S from './SignStyle';
import axios from 'axios';
import { idCheck, passwordCheck, samePasswordCheck, emailCheck } from '@/utils/confirmReg';
import Button from '@/components/Button/Button';

function SignUp() {
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
    confirmPassword: '',
    name: '',
    email: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);

  const { id, password, confirmPassword, name, email } = inputs;

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    });
  };

  const handleShowPassword = () => {
    const passType = document.getElementById('password') as HTMLInputElement;
    passType.type === 'password'
      ? ((passType.type = 'text'), setShowPassword(true))
      : ((passType.type = 'password'), setShowPassword(false));
  };

  const handleShowconfirmPassword = () => {
    const chPassType = document.getElementById('confirmPassword') as HTMLInputElement;
    chPassType.type === 'password'
      ? ((chPassType.type = 'text'), setShowconfirmPassword(true))
      : ((chPassType.type = 'password'), setShowconfirmPassword(false));
  };

  const handleSignUp = () => {
    if (idCheck(id) && passwordCheck(password) && samePasswordCheck(password, confirmPassword) && emailCheck(email)) {
      axios
        .post(`/signup`, inputs)
        .then((res) => {
          console.log(res);
          switch (res.status) {
            case 200:
              Swal.fire({
                title: 'Success!',
                icon: 'success',
                confirmButtonText: '확인',
              }).then(() => {
                window.location.href = '/';
              });
              break;
            case 202:
              Swal.fire({
                title: 'ID already registered',
                icon: 'error',
                confirmButtonText: '확인',
              });
              break;
            default:
              console.log('정의된 값이 아닙니다.');
          }
        })
        .catch((Error) => {
          console.log(Error);
        });
    } else {
      Swal.fire({
        title: 'Incorrect!',
        text: 'Please check the input information again.',
        icon: 'error',
        confirmButtonText: '확인',
      });
    }
  };

  return (
    <S.SignWrapper>
      <S.SignCard>
        <S.ImgPanel imgStart={true} />
        <S.SignPanel signStart={false}>
          <S.FormTitle>SIGN UP</S.FormTitle>
          <S.InputWrapper>
            <S.FormInput id="id" value={id} onChange={handleInputs} data-testid="id-input" />
            <S.InputTitle
              value={id}
              data-placeholder={idCheck(id) || inputs.id.length === 0 ? 'ID' : 'ID Incorrect '}
              isReg={!(idCheck(id) || inputs.id.length === 0)}
            ></S.InputTitle>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.EyeSvg $isShow={showPassword} onClick={handleShowPassword} data-testid="eye-svg-pw" />
            <S.FormInput
              id="password"
              type="password"
              value={password}
              onChange={handleInputs}
              placeholder="영문과 특수문자 숫자를 포함하며 8자 이상"
              data-testid="pw-input"
            />
            <S.InputTitle
              value={password}
              data-placeholder={
                passwordCheck(password) || inputs.password.length === 0 ? 'Password' : 'Password Incorrect'
              }
              isReg={!(passwordCheck(password) || inputs.password.length === 0)}
            ></S.InputTitle>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.EyeSvg
              $isShow={showconfirmPassword}
              onClick={handleShowconfirmPassword}
              data-testid="eye-svg-confirmpw"
            />
            <S.FormInput
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={handleInputs}
              data-testid="confirmpw-input"
            />
            <S.InputTitle
              value={confirmPassword}
              data-placeholder={
                samePasswordCheck(password, confirmPassword) || inputs.confirmPassword.length === 0
                  ? 'ConfirmPassword'
                  : 'ConfirmPassword Incorrect'
              }
              isReg={!(samePasswordCheck(password, confirmPassword) || inputs.confirmPassword.length === 0)}
            ></S.InputTitle>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.FormInput id="name" value={name} onChange={handleInputs} data-testid="name-input" />
            <S.InputTitle value={name} data-placeholder="Name"></S.InputTitle>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.FormInput id="email" value={email} onChange={handleInputs} data-testid="email-input" />
            <S.InputTitle
              value={email}
              data-placeholder={emailCheck(email) || inputs.email.length === 0 ? 'Email' : 'Email Incorrect '}
              isReg={!(emailCheck(email) || inputs.email.length === 0)}
            ></S.InputTitle>
          </S.InputWrapper>
          <S.SignLink href="/login">Do you have an account?</S.SignLink>
          <Button onClick={handleSignUp} size="lg" themes="sign" data-testid="signup-button">
            SIGN UP
          </Button>
        </S.SignPanel>
      </S.SignCard>
    </S.SignWrapper>
  );
}

export default SignUp;
