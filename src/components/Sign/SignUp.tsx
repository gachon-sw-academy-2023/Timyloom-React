import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import * as S from './SignStyle';
import Swal from 'sweetalert2';

function SignUp() {
  const regExp = new RegExp('(?=.*[a-zA-Z])[-a-zA-Z0-9_.]{5,20}$'); //id 정규식
  const regPass = new RegExp('(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}'); //password 정규식
  const regEm = new RegExp('[a-z0-9]+@[a-z]+[a-z]{2,3}'); //email 정규식

  const [inputs, setInputs] = useState({
    id: '',
    password: '',
    checkPassword: '',
    name: '',
    email: '',
  });

  const { id, password, checkPassword, name, email } = inputs; // 구조분해할당

  const onChange = (e: any) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    console.log(e.target);
  };

  const onAlert = (e: any) => {
    console.log(e.target);
    console.log('sss');
  };

  const onCheck = () => {
    {
      (!regExp.test(id) ||
        !regPass.test(password) ||
        !regEm.test(email) ||
        !(inputs.password === inputs.checkPassword)) &&
        Swal.fire({
          title: 'Incorrect!',
          text: 'Please check the input information again.',
          icon: 'error',
          confirmButtonText: '확인',
        });
    }
    {
      regExp.test(password) &&
        Swal.fire({
          title: 'Success!',
          text: 'yes',
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
              data-placeholder={regExp.test(id) || inputs.id.length === 0 ? 'ID' : 'ID Incorrect '}
              isReg={regExp.test(id) || inputs.id.length === 0}
            ></S.InputTitle>
          </S.InputWrap>
          <S.InputWrap>
            <S.FormInput name="password" value={password} onChange={onChange} />
            <S.InputTitle
              value={password}
              data-placeholder={
                regPass.test(password) || inputs.password.length === 0 ? 'Password' : 'Password Incorrect'
              }
              isReg={regPass.test(password) || inputs.password.length === 0}
            ></S.InputTitle>
          </S.InputWrap>
          <S.InputWrap>
            <S.FormInput name="checkPassword" value={checkPassword} onChange={onChange} />
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
            <div>
              <S.FormInput name="email" value={email} onChange={onChange} onClick={onAlert} />
              <S.InputTitle
                value={email}
                data-placeholder={regEm.test(email) || inputs.email.length === 0 ? 'Email' : 'Email Incorrect '}
                isReg={regEm.test(email) || inputs.email.length === 0}
              ></S.InputTitle>
            </div>
          </S.InputWrap>

          <S.SignLink href="/login">Do You have an account?</S.SignLink>
          <S.SignBtn onClick={onCheck}>SIGN IN</S.SignBtn>
        </S.SignPanel>
      </S.SignCard>
    </S.SignWrapper>
  );
}

export default SignUp;
