import styled from "styled-components";
import React, { useState } from "react";
import Header from "../../components/header";
import Image from "next/image";
import KakaoImage from "../../../public/LoginImage/Kakao.png";

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loginDisabled, setLoginDisabled] = useState(false);
  const [errStack, setErrStack] = useState(0);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
    } else {
      setEmailError("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (!/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/.test(value)) {
      setPasswordError("영문+숫자 조합 8자 이상 입력해주세요.");
    } else {
      setPasswordError("");
    }
  };

  const PwVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginClick = () => {
    if (loginDisabled) {
      alert("잠시 후 다시 시도해주세요.");
      return;
    }

    if (email === "hoo6710@naver.com" && password === "jiho0419") {
      alert("로그인 되었습니다!");
    } else {
      alert("아이디와 비밀번호를 다시 한 번 확인해주세요!");
      setErrStack((prev) => prev + 1);
    }

    if (errStack >= 4) {
      alert("비밀번호를 5회 이상 틀리셨습니다. 30초 동안 잠금 처리됩니다.");
      setLoginDisabled(true);
      setTimeout(() => {
        setErrStack(0);
        setLoginDisabled(false);
      }, 30000);
    }
  };

  return (
    <div>
      <Header />

      <StyledLogin>
        <LoginTitle>로그인</LoginTitle>
        <LoginId>
          <h3>아이디</h3>
          <input
            type="email"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={handleEmailChange}
            style={{
              border: emailError ? "1px solid red" : "1px #D9D9D9 solid",
            }}
          />
          {emailError && <LoginIdError>{emailError}</LoginIdError>}
        </LoginId>
        <LoginPw>
          <h3>비밀번호</h3>
          <LoginPwVisibility>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handleChange}
              placeholder="비밀번호를 입력해주세요."
              style={{
                border: passwordError ? "1px solid red" : "1px #D9D9D9 solid",
              }}
            />
            <PwVisibilityBtn onClick={PwVisibility}>
              {showPassword ? "Hide" : "View"}
            </PwVisibilityBtn>
          </LoginPwVisibility>
          {passwordError && <LoginPwError>{passwordError}</LoginPwError>}
        </LoginPw>
        <LoginBtn onClick={handleLoginClick} disabled={loginDisabled}>
          로그인
        </LoginBtn>
        <LoginSaveFind>
          <LoginSave>
            <input type="checkbox" />
            <label>자동 로그인</label>
          </LoginSave>
          <LoginFind>
            <a href="#">아이디 찾기 |</a>
            <a href="#"> 비밀번호 찾기</a>
          </LoginFind>
        </LoginSaveFind>
        <LoginKakao>
          <Image width={20} height={20} src={KakaoImage} />
          <a href="#">카카오 로그인</a>
        </LoginKakao>
        <LoginSignup>
          <p>EATIT이 처음이라면?</p>
          <a href="#">회원가입</a>
        </LoginSignup>
      </StyledLogin>
    </div>
  );
};

export default LoginContainer;

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px #808080 solid;
  width: 400px;
  height: 510px;
  margin: auto;
  border-radius: 10px;
`;

const LoginTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  width: 100%;
  height: 100px;
`;

const LoginId = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;
  h3 {
    font-weight: bold;
    margin-bottom: 3px;
  }
  input {
    color: #808080;
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    outline: none;
    margin-bottom: 3px;
  }
`;

const LoginPw = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 25px;
  h3 {
    font-weight: bold;
    margin-bottom: 3px;
  }
  input {
    color: #808080;
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    outline: none;
  }
`;
const LoginPwVisibility = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PwVisibilityBtn = styled.button`
  margin-left: 3px;
  font-size: 12px;
`;

const LoginIdError = styled.div`
  font-size: 12px;
  color: red;
`;

const LoginPwError = styled.div`
  font-size: 12px;
  color: red;
`;

const LoginSaveFind = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;

const LoginSave = styled.div`
  display: flex;
  align-items: center;
  label {
    font-size: 13px;
    margin-left: 5px;
  }
`;

const LoginFind = styled.div`
  font-size: 13px;
`;

const LoginBtn = styled.button`
  margin-bottom: 12px;
  background-color: #978eff;
  color: white;
  font-weight: bold;
  font-size: 17px;
  height: 45px;
  width: 300px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`;

const LoginKakao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fee500;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 17px;
  margin-bottom: 25px;
  width: 300px;
  height: 45px;
`;

const LoginSignup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  p {
    font-size: 16px;
  }
  a {
    color: #978eff;
    font-size: 16px;
    font-weight: bold;
  }
`;
