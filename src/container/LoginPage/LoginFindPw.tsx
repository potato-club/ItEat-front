import { useForm } from "react-hook-form";
import styled from "styled-components";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/footer";

const LoginFindPw = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const LoginError: React.FC<{ children: any }> = ({ children }) => (
    <div style={{ fontSize: "12px", color: "red" }}>{children}</div>
  );

  return (
    <div>
      <Header />
      <LFPTitle>비밀번호 찾기</LFPTitle>
      <StyleLoginFindPw>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LFPExplanation>
            <LFPExplan1>
              EatIt계정의 <br />
              비밀번호를 재설정합니다.
            </LFPExplan1>
            <LFPExplan2>
              비밀번호를 재설정할 <br />
              EatIt의 이메일을 입력해주세요.
            </LFPExplan2>
          </LFPExplanation>
          <LFPId>
            <LFPIdTitle>EatIt 아이디</LFPIdTitle>
            <LFPIdInput>
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
              />
              {errors.email && <LoginError>{errors.email.message}</LoginError>}
            </LFPIdInput>
          </LFPId>
          <LFPBtn type="submit">이메일 전송하기</LFPBtn>
        </form>
      </StyleLoginFindPw>
      <Footer />
    </div>
  );
};

export default LoginFindPw;

const LFPTitle = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const StyleLoginFindPw = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px #808080 solid;
  width: 500px;
  height: 510px;
  padding: 60px 50px 50px 60px;
  margin: auto;
  border-radius: 10px;
`;
const LFPExplanation = styled.div``;

const LFPExplan1 = styled.div`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const LFPExplan2 = styled.div`
  color: #7c7c7c;
  font-size: 15px;
  margin-bottom: 38px;
`;

const LFPId = styled.div``;
const LFPIdTitle = styled.div`
  color: black;
  font-size: 16px;
  font-weight: bold;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const LFPIdInput = styled.div`
  input {
    color: #8e8e8e;
    width: 100%;
    padding: 5px 0px;
    border: none;
    border-bottom: 2px solid #d0d0d0;
    outline: none;
    margin-bottom: 100px;
  }
`;
const LFPBtn = styled.button`
  margin-bottom: 12px;
  background-color: #978eff;
  color: white;
  font-weight: bold;
  font-size: 17px;
  height: 45px;
  width: 100%;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`;

const LoginError = styled.div`
  font-size: 12px;
  color: red;
`;
