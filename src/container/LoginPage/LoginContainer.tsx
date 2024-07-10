import { useForm } from "react-hook-form";
import styled from "styled-components";
import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Nextimage from "next/image";
import KakaoImage from "../../../public/LoginImage/Kakao.png";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

const LoginContainer = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loginDisabled, setLoginDisabled] = useState(false);
  const [errStack, setErrStack] = useState(0);

  const onSubmit = async (data: any) => {
    if (loginDisabled) {
      alert("잠시 후 다시 시도해주세요.");
      return;
    }

    try {
      const response = await axios.post(`https://eat--it.shop/client/login`, {
        email: data.email,
        password: data.password,
      });

      if (response.status === 200 || response.data.success) {
        alert("로그인 되었습니다!");
        router.push("/login/loginmypage");
      } else {
        alert("아이디와 비밀번호를 다시 한 번 확인해주세요!");
        setErrStack((prev) => prev + 1);
      }
    } catch (error) {
      console.error("서버 오류가 발생했습니다.", error);
      alert("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }

    ///
    if (errStack >= 4) {
      alert("비밀번호를 5회 이상 틀리셨습니다. 30초 동안 잠금 처리됩니다.");
      setLoginDisabled(true);
      setTimeout(() => {
        setErrStack(0);
        setLoginDisabled(false);
      }, 30000); // 백엔드에서 처리
    }
    ///
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

  const handleKakaoLoginClick = () => {
    const REST_API_KEY = "8f181a8abe562d8ad06273017a01a79b";
    const REDIRECT_URI = "http://localhost:3000/redirecthandler";
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = link;
  };

  const LoginError: React.FC<{ children: any }> = ({ children }) => (
    <div style={{ fontSize: "12px", color: "red" }}>{children}</div>
  );
  useEffect(() => {
    const fetchKakaoToken = async (code: string) => {
      try {
        const response = await axios.post(
          `https://kauth.kakao.com/oauth/token`,
          new URLSearchParams({
            grant_type: "authorization_code",
            client_id: "8f181a8abe562d8ad06273017a01a79b",
            redirect_uri: "http://localhost:3000/redirecthandler",
            code,
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        const { access_token } = response.data;

        const userResponse = await axios.get(
          "https://kapi.kakao.com/v2/user/me",
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        console.log(userResponse.data); // User information

        alert("카카오 로그인 성공!");
        router.push("/login/loginmypage");
      } catch (error) {
        console.error("카카오 토큰 요청 오류", error);
        alert("카카오 로그인 실패");
      }
    };

    if (router.query.code) {
      fetchKakaoToken(router.query.code as string);
    }
  }, [router]);
  // useEffect(() => {
  //   const fetchKakaoToken = async (code: string) => {
  //     try {
  //       const response = await axios.post(
  //         `https://kauth.kakao.com/oauth/token`,
  //         new URLSearchParams({
  //           grant_type: "authorization_code",
  //           client_id: process.env.NEXT_PUBLIC_REST_API_KEY as string,
  //           redirect_uri: "http://localhost:3000/redirecthandler",
  //           code,
  //         }),
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           maxRedirects: 0, // 리디렉션을 따르지 않도록 설정
  //           withCredentials: true,
  //         }
  //       );

  //       alert("카카오 로그인 성공!");
  //       router.push("/login/loginmypage");
  //     } catch (error) {
  //       console.error("카카오 토큰 요청 오류", error);
  //       alert("카카오 로그인 실패");
  //     }
  //   };

  //   if (router.query.code) {
  //     fetchKakaoToken(router.query.code as string);
  //   }
  // }, [router]);

  return (
    <div>
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
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
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
        <LoginKakao onClick={handleKakaoLoginClick}>
          <Nextimage width={20} height={20} src={KakaoImage} alt="kakaoimage" />
          <KakaoLoginbar>카카오 로그인</KakaoLoginbar>
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
const KakaoLoginbar = styled.div`
  display: flex;
  margin-left: 5px;
  cursor: pointer;
`;
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
