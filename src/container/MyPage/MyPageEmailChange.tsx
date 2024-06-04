import { useForm } from "react-hook-form";
import styled from "styled-components";
import React from "react";
import router from "next/router";
import Footer from "../../components/footer";

const MyPageEmailChange = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    router.push("/mypage/mypageprivacy");
    alert("이메일이 변경되었습니다!");
  };

  return (
    <div>
      <StyleMyPageEmailChange>
        <EmailChangeName>이메일 수정 </EmailChangeName>
        <LoginId>
          <h3>이메일</h3>
          <input
            type="email"
            placeholder="이메일을 입력해주세요."
            {...register("email", {
              required: "이메일을 입력하세요.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "이메일 형식으로 입력해주세요.",
              },
            })}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <LoginError>{errors.email?.message}</LoginError>}
        </LoginId>
        <PwChangeBtnBox>
          <EmailChangeCancelBtn>취소</EmailChangeCancelBtn>
          <EmailChangeCheckBtn type="submit" onClick={handleSubmit(onSubmit)}>
            수정 완료
          </EmailChangeCheckBtn>
        </PwChangeBtnBox>
      </StyleMyPageEmailChange>
      <Footer />
    </div>
  );
};

export default MyPageEmailChange;

const LoginId = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;
  margin-bottom: 50px;
  h3 {
    color: #888888;
    font-weight: bold;
    margin-bottom: 10px;
  }
  input {
    color: #808080;
    width: 100%;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #d9d9d9;
  }
  input.error {
    border: 1px solid red;
  }
`;

const PwChangeBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-right: 60px;
`;

const EmailChangeCancelBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 45px;
  margin-right: 10px;
  border-radius: 5px;
  outline: none;
  background-color: white;
  color: #978eff;
  font-weight: bold;
`;

const EmailChangeCheckBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 45px;
  border-radius: 5px;
  outline: none;
  background-color: #978eff;
  color: white;
  font-weight: bold;
`;

const StyleMyPageEmailChange = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 50%;
  height: 800px;
`;

const EmailChangeName = styled.div`
  display: flex;
  font-size: 35px;
  color: black;
  font-weight: 550;
  margin-top: 48px;
  margin-bottom: 48px;
`;

const LoginError = styled.div`
  margin-top: 5px;
  font-size: 13px;
  color: red;
`;
