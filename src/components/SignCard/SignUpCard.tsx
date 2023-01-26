import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import * as S from './CardStyle';
import axios from 'axios';
import { checkId, checkPassword, checkSamePassword, checkEmail } from '@/utils/validation';
import Button from '@/components/Button/Button';

function SignUpCard() {
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
    confirmPassword: '',
    name: '',
    email: '',
  });
  const [showPw, setShowPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);

  const [idValidation, setIdValidation] = useState(true);
  const [pwValidation, setPwValidation] = useState(true);
  const [confirmPwValidation, setConfirmPwValidation] = useState(true);
  const [emailValidation, setEmailValidation] = useState(true);

  const { id, password, confirmPassword, name, email } = inputs;

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    });

    switch (e.target.id) {
      case 'id':
        setIdValidation(checkId(e.target.value));
        break;
      case 'password':
        setPwValidation(checkPassword(e.target.value));
        // setConfirmPwValidation(checkSamePassword(e.target.value, confirmPassword));
        break;
      case 'confirmPassword':
        setConfirmPwValidation(checkSamePassword(password, e.target.value));
        break;
      case 'email':
        setEmailValidation(checkEmail(e.target.value));
        break;
      default:
        break;
    }
  };
  const handleShowPassword = (type: string) => {
    const passType = document.getElementById(type) as HTMLInputElement;
    if (type === 'password') {
      passType.type === 'password'
        ? ((passType.type = 'text'), setShowPw(true))
        : ((passType.type = 'password'), setShowPw(false));
    } else {
      passType.type === 'password'
        ? ((passType.type = 'text'), setShowConfirmPw(true))
        : ((passType.type = 'password'), setShowConfirmPw(false));
    }
  };

  const handleSignUp = () => {
    if (checkId(id) && checkPassword(password) && checkSamePassword(password, confirmPassword) && checkEmail(email)) {
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
    <S.SignCard>
      <S.ImgPanel imgStart={true} />
      <S.SignPanel signStart={false}>
        <S.FormTitle>SIGN UP</S.FormTitle>
        <S.InputWrapper>
          <S.FormInput id="id" value={id} onChange={handleInputs} data-testid="id-input" />
          <S.InputTitle
            value={id}
            data-placeholder={idValidation ? 'ID' : 'ID Incorrect '}
            isReg={idValidation}
          ></S.InputTitle>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.EyeSvg
            $isShow={showPw}
            onClick={() => {
              handleShowPassword('password');
            }}
            data-testid="eye-svg-pw"
          />
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
            data-placeholder={pwValidation ? 'Password' : 'Password Incorrect'}
            isReg={pwValidation}
          ></S.InputTitle>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.EyeSvg
            $isShow={showConfirmPw}
            onClick={() => {
              handleShowPassword('confirmPassword');
            }}
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
            data-placeholder={confirmPwValidation ? 'ConfirmPassword' : 'ConfirmPassword Incorrect'}
            isReg={confirmPwValidation}
          ></S.InputTitle>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.FormInput id="name" value={name} onChange={handleInputs} data-testid="name-input" />
          <S.InputTitle value={name} data-placeholder="Name" isReg={true}></S.InputTitle>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.FormInput id="email" value={email} onChange={handleInputs} data-testid="email-input" />
          <S.InputTitle
            value={email}
            data-placeholder={emailValidation ? 'Email' : 'Email Incorrect '}
            isReg={emailValidation}
          ></S.InputTitle>
        </S.InputWrapper>
        <S.SignLink href="/login">Do you have an account?</S.SignLink>
        <Button onClick={handleSignUp} size="lg" themes="sign" data-testid="signup-button">
          SIGN UP
        </Button>
      </S.SignPanel>
    </S.SignCard>
  );
}

export default SignUpCard;
