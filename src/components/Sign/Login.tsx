import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import * as S from './SignStyle';

function Login() {
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });

  const [alert, setAlert] = useState(true);

  const [seePass, setSeePass] = useState(false);

  const { id, password } = inputs; //구조분해할당

  const regExp = new RegExp('[a-z]+[a-z0-9]{5,19}$/g'); //id 정규식
  const regPass = new RegExp('(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}'); //비밀번호 정규식
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    console.log(typeof inputs);
  };

  const showPassword = () => {
    const test = document.getElementById('password') as HTMLInputElement;
    test.type === 'password' ? ((test.type = 'text'), setSeePass(true)) : ((test.type = 'password'), setSeePass(false));
  };

  const onCheck = () => {
    {
      !regExp.test(id) &&
        !regPass.test(password) &&
        Swal.fire({
          title: 'Incorrect!',
          text: 'id or password incorrect',
          icon: 'error',
          confirmButtonText: '확인',
        });
    }

    {
      !regExp.test(id) &&
        Swal.fire({
          title: 'Incorrect!',
          text: 'id incorrect',
          icon: 'error',
          confirmButtonText: '확인',
        });
    }

    {
      !regPass.test(password) &&
        Swal.fire({
          title: 'Incorrect!',
          text: 'password incorrect',
          icon: 'error',
          confirmButtonText: '확인',
        });
    }
  };
  return (
    <S.SignWrapper>
      <S.SignCard>
        <S.SignPanel signStart={true}>
          <S.FormTitle>LOGIN</S.FormTitle>
          <S.InputWrap>
            <S.FormInput name="id" value={id} onChange={onChange} />
            <S.InputTitle value={id} data-placeholder="ID"></S.InputTitle>
          </S.InputWrap>
          <S.InputWrap data-validate="Enter password">
            <S.EyeSvg see={seePass} onClick={showPassword} />
            <S.FormInput
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={onChange}
              placeholder="영문과 특수문자 숫자를 포함하며 8자 이상"
            />
            <S.InputTitle value={password} data-placeholder="Password"></S.InputTitle>
          </S.InputWrap>
          <S.SignLink href="/signup">Don’t have an account?</S.SignLink>
          <S.SignBtn onClick={onCheck}>LOGIN</S.SignBtn>
        </S.SignPanel>
        <S.ImgPanel imgStart={false}></S.ImgPanel>
      </S.SignCard>
    </S.SignWrapper>
  );
}

export default Login;
