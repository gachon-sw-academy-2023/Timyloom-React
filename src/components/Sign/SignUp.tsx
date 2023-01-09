import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import * as S from './SignStyle';

function SignUp() {
  const regId = new RegExp('(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{5,20}$'); //id 정규식
  const regPw = new RegExp('(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}'); //password 정규식
  const regEmail = new RegExp('[a-z0-9]+@[a-z]+[a-z]{2,3}'); //email 정규식

  const [inputs, setInputs] = useState({
    id: '',
    password: '',
    checkPassword: '',
    name: '',
    email: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showCheckPassword, setShowCheckPassword] = useState(false);

  const { id, password, checkPassword, name, email } = inputs; // 구조분해할당

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onShowPassword = () => {
    const passType = document.getElementById('password') as HTMLInputElement;
    passType.type === 'password'
      ? ((passType.type = 'text'), setShowPassword(true))
      : ((passType.type = 'password'), setShowPassword(false));
  };

  const onShowCheckPassword = () => {
    const chPassType = document.getElementById('checkPassword') as HTMLInputElement;
    chPassType.type === 'password'
      ? ((chPassType.type = 'text'), setShowCheckPassword(true))
      : ((chPassType.type = 'password'), setShowCheckPassword(false));
  };

  const onCheck = () => {
    {
      (!regId.test(id) ||
        !regPw.test(password) ||
        !regEmail.test(email) ||
        !(inputs.password === inputs.checkPassword)) &&
        Swal.fire({
          title: 'Incorrect!',
          text: 'Please check the input information again.',
          icon: 'error',
          confirmButtonText: '확인',
        });
    }
    {
      regPw.test(password) &&
        Swal.fire({
          title: 'Success!',
          icon: 'success',
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
          <S.InputWrap>
            <S.FormInput name="id" value={id} onChange={onChange} />
            <S.InputTitle
              value={id}
              data-placeholder={regId.test(id) || inputs.id.length === 0 ? 'ID' : 'ID Incorrect '}
              isReg={regId.test(id) || inputs.id.length === 0}
            ></S.InputTitle>
          </S.InputWrap>
          <S.InputWrap>
            <S.EyeSvg $isShow={showPassword} onClick={onShowPassword} />
            <S.FormInput
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={onChange}
              placeholder="영문과 특수문자 숫자를 포함하며 8자 이상"
            />
            <S.InputTitle
              value={password}
              data-placeholder={
                regPw.test(password) || inputs.password.length === 0 ? 'Password' : 'Password Incorrect'
              }
              isReg={regPw.test(password) || inputs.password.length === 0}
            ></S.InputTitle>
          </S.InputWrap>
          <S.InputWrap>
            <S.EyeSvg $isShow={showCheckPassword} onClick={onShowCheckPassword} />
            <S.FormInput
              id="checkPassword"
              name="checkPassword"
              type="password"
              value={checkPassword}
              onChange={onChange}
            />
            <S.InputTitle
              value={checkPassword}
              data-placeholder={
                inputs.password === inputs.checkPassword || inputs.checkPassword.length === 0
                  ? 'CheckPassword'
                  : 'CheckPassword Incorrect'
              }
              isReg={inputs.password === inputs.checkPassword || inputs.checkPassword.length === 0}
            ></S.InputTitle>
          </S.InputWrap>
          <S.InputWrap>
            <S.FormInput name="name" value={name} onChange={onChange} />
            <S.InputTitle value={name} data-placeholder="Name" isReg={true}></S.InputTitle>
          </S.InputWrap>
          <S.InputWrap>
            <S.FormInput name="email" value={email} onChange={onChange} />
            <S.InputTitle
              value={email}
              data-placeholder={regEmail.test(email) || inputs.email.length === 0 ? 'Email' : 'Email Incorrect '}
              isReg={regEmail.test(email) || inputs.email.length === 0}
            ></S.InputTitle>
          </S.InputWrap>

          <S.SignLink href="/login">Do You have an account?</S.SignLink>
          <S.SignBtn onClick={onCheck}>SIGN UP</S.SignBtn>
        </S.SignPanel>
      </S.SignCard>
    </S.SignWrapper>
  );
}

export default SignUp;
