import { useForm } from "react-hook-form";
import styled from "styled-components";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/footer";

const LoginFindID = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <Header />
      <LFITitle>아이디 찾기</LFITitle>
      <StyleLoginFindId>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LFIExplanation>
            <LFIExplan1>
              닉네임 또는 이름, 전화번호로 <br />
              계정을 찾습니다.
            </LFIExplan1>
            <LFIExplan2>
              EatIt에 사용한 닉네임 또는 이름과 <br />
              연락처에 입력한 전화번호를 입력해주세요.
            </LFIExplan2>
          </LFIExplanation>
          <LFIPw>
            <LFIName>닉네임 또는 이름</LFIName>
            <LFIInput1>
              <input
                type="text"
                placeholder="닉네임 또는 이름을 입력해주세요."
                {...register("name", { required: true })}
              />
              {errors.name && (
                <ErrorText>닉네임 또는 이름을 입력하세요.</ErrorText>
              )}
            </LFIInput1>
            <LFITel>전화번호</LFITel>
            <LFIInput2>
              <input
                type="tel"
                placeholder="예) 010-0000-0000"
                {...register("phoneNumber", { required: true })}
              />
              {errors.phoneNumber && (
                <ErrorText>전화번호를 입력하세요.</ErrorText>
              )}
            </LFIInput2>
          </LFIPw>
          <LFPBtn type="submit">EatIt 계정찾기</LFPBtn>
        </form>
      </StyleLoginFindId>
      <Footer />
    </div>
  );
};

export default LoginFindID;

const LFITitle = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const StyleLoginFindId = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px #808080 solid;
  width: 500px;
  height: 560px;
  padding: 60px 50px 50px 60px;
  margin: auto;
  border-radius: 10px;
`;
const LFIExplanation = styled.div``;

const LFIExplan1 = styled.div`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const LFIExplan2 = styled.div`
  color: #7c7c7c;
  font-size: 15px;
  margin-bottom: 38px;
`;

const LFIPw = styled.div``;
const LFIName = styled.div`
  color: black;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const LFIInput1 = styled.div`
  input {
    color: #8e8e8e;
    width: 100%;
    padding: 5px 0px;
    border: none;
    border-bottom: 2px solid #d0d0d0;
    outline: none;
    margin-bottom: 20px;
  }
`;

const LFITel = styled.div`
  color: black;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const LFIInput2 = styled.div`
  input {
    color: #8e8e8e;
    width: 100%;
    padding: 5px 0px;
    border: none;
    border-bottom: 2px solid #d0d0d0;
    outline: none;
    margin-bottom: 70px;
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

const ErrorText = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 5px;
`;
