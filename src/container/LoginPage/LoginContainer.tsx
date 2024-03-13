import { useForm } from "react-hook-form";
import styled from "styled-components";
import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/footer";
import Image from "next/image";
import KakaoImage from "../../../public/LoginImage/Kakao.png";
import router, { Router } from "next/router";

const LoginContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loginDisabled, setLoginDisabled] = useState(false);
  const [errStack, setErrStack] = useState(0);

  const onSubmit = (data: any) => {
    if (loginDisabled) {
      alert("잠시 후 다시 시도해주세요.");
      return;
    }

    if (data.email === "hoo6710@naver.com" && data.password === "jiho0419") {
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

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFindIdClick = () => {
    router.push("/login/loginfindid");
  };

  const handleFindPwClick = () => {
    router.push("/login/loginfindpw");
  };

  const handleSignupClick = () => {
    router.push("/signup/signup");
  };

  const LoginError: React.FC<{ children: any }> = ({ children }) => (
    <div style={{ fontSize: "12px", color: "red" }}>{children}</div>
  );

  return (
    <div>
      <Header />

      <StyledLogin>
        <LoginTitle>로그인</LoginTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LoginId>
            <h3>아이디</h3>
            <input
              type="email"
              placeholder="이메일을 입력해주세요."
              {...register("email", {
                required: "이메일을 입력하세요.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "올바른 이메일 형식이 아닙니다.",
                },
              })}
              style={{
                border: errors.email ? "1px solid red" : "1px #D9D9D9 solid",
              }}
            />
            {errors.email && <LoginError>{errors.email?.message}</LoginError>}
          </LoginId>
          <LoginPw>
            <h3>비밀번호</h3>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력해주세요."
                {...register("password", {
                  required: "비밀번호를 입력하세요.",
                  minLength: {
                    value: 8,
                    message: "영문+숫자 조합 8자 이상 입력해주세요.",
                  },
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
                    message: "영문+숫자 조합 8자 이상 입력해주세요.",
                  },
                })}
                style={{
                  border: errors.password
                    ? "1px solid red"
                    : "1px #D9D9D9 solid",
                }}
              />
              <PwVisibilityBtn type="button" onClick={handlePasswordVisibility}>
                {showPassword ? "Hide" : "View"}
              </PwVisibilityBtn>
            </div>
            {errors.password && (
              <LoginError>{errors.password?.message}</LoginError>
            )}
          </LoginPw>
          <LoginBtn type="submit" disabled={loginDisabled}>
            로그인
          </LoginBtn>
        </form>
        <LoginSaveFind>
          <LoginSave>
            <input type="checkbox" />
            <label>자동 로그인</label>
          </LoginSave>
          <LoginFind>
            <LoginFindIdBtn onClick={handleFindIdClick}>
              아이디 찾기 |
            </LoginFindIdBtn>
            <LoginFindPwBtn onClick={handleFindPwClick}>
              비밀번호 찾기
            </LoginFindPwBtn>
          </LoginFind>
        </LoginSaveFind>
        <LoginKakao>
          <Image width={20} height={20} src={KakaoImage} />
          <a href="#">카카오 로그인</a>
        </LoginKakao>
        <LoginSignup>
          <p>EatIt이 처음이라면?</p>
          <LoginSignupbtn onClick={handleSignupClick}>회원가입</LoginSignupbtn>
        </LoginSignup>
      </StyledLogin>
      <Footer />
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
  color: black;
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
    color: #888888;
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
    color: #888888;
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

const PwVisibilityWrapper = styled.div`
  position: relative;
`;

const PwVisibilityBtn = styled.button`
  color: #808080;
  margin-right: 3px;
  font-size: 12px;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
`;

const LoginError = styled.div`
  font-size: 12px;
  color: red;
`;

const LoginSaveFind = styled.div`
  color: #888888;
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
  display: flex;
  justify-content: space-between;
`;

const LoginFindIdBtn = styled.div`
  font-size: 13px;
  cursor: pointer;
`;
const LoginFindPwBtn = styled.div`
  margin-left: 5px;
  font-size: 13px;
  cursor: pointer;
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
    color: #888888;
    font-size: 16px;
  }
`;

const LoginSignupbtn = styled.div`
  color: #978eff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
