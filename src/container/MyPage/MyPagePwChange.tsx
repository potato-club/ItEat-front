import { useForm } from "react-hook-form";
import styled from "styled-components";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../../components/footer";

const MyPagePwChange = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
  } = useForm({
    mode: "onChange",
  });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const newPassword = watch("newPassword", "");

  const handleChangeNewPw = () => {
    router.push("/mypage/mypageprivacy");
    alert("비밀번호 변경 완료!");
  };

  return (
    <div>
      <StyleMyPagePwChange>
        <PwChangeName>비밀번호 변경</PwChangeName>
        <PwChange>
          <h3>기존 비밀번호</h3>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호를 입력해주세요."
              {...register("oldPassword", {
                required: "비밀번호를 입력하세요.",
              })}
              className={errors.oldPassword ? "error" : ""}
            />
            <PwVisibilityBtn type="button" onClick={handlePasswordVisibility}>
              {showPassword ? "숨김" : "표시"}
            </PwVisibilityBtn>
            {errors.oldPassword && (
              <LoginError>{errors.oldPassword?.message}</LoginError>
            )}
          </div>
        </PwChange>
        <NewPwChange>
          <h3>새로운 비밀번호</h3>
          <div style={{ position: "relative" }}>
            <input
              type="password"
              placeholder="영문+숫자 조합 8자 이상 입력해주세요."
              {...register("newPassword", {
                required: "비밀번호를 입력하세요.",
                minLength: {
                  value: 8,
                  message: "비밀번호를 입력하세요.",
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
                  message: "영문+숫자 조합 8자 이상 입력해주세요.",
                },
              })}
              className={errors.newPassword ? "error" : ""}
            />
            {errors.newPassword && (
              <LoginError>{errors.newPassword?.message}</LoginError>
            )}
          </div>
        </NewPwChange>
        <NewPwChangCheck>
          <h3>새로운 비밀번호 확인</h3>
          <div style={{ position: "relative" }}>
            <input
              type="password"
              placeholder="비밀번호 한번 더 입력해주세요."
              {...register("newPasswordCheck", {
                required: "비밀번호를 다시 입력하세요.",
                validate: (value) =>
                  value === newPassword || "비밀번호가 일치하지 않습니다.",
              })}
              className={errors.newPasswordCheck ? "error" : ""}
            />
            {errors.newPasswordCheck && (
              <LoginError>{errors.newPasswordCheck?.message}</LoginError>
            )}
          </div>
        </NewPwChangCheck>
        <PwChangeBtnBox>
          <PwChangeCancelBtn>취소</PwChangeCancelBtn>
          <PWChangeCheckBtn
            type="submit"
            disabled={!isDirty}
            onClick={handleChangeNewPw}
          >
            변경 완료
          </PWChangeCheckBtn>
        </PwChangeBtnBox>
      </StyleMyPagePwChange>
      <Footer />
    </div>
  );
};

export default MyPagePwChange;

const StyleMyPagePwChange = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 50%;
  height: 800px;
`;

const PwChangeName = styled.div`
  display: flex;
  font-size: 35px;
  color: black;
  font-weight: 550;
  margin-top: 48px;
  margin-bottom: 48px;
`;

const PwChange = styled.div`
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
const PwVisibilityBtn = styled.button`
  display: flex;
  color: #978eff;
  margin-right: 3px;
  font-size: 15px;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
`;

const NewPwChange = styled.div`
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
const NewPwChangCheck = styled.div`
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

const LoginError = styled.div`
  margin-top: 5px;
  font-size: 13px;
  color: red;
`;

const PwChangeBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-right: 60px;
`;

const PwChangeCancelBtn = styled.button`
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

const PWChangeCheckBtn = styled.button`
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
