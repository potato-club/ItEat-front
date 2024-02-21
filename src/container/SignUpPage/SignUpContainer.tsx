import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";

function SignUpContainer() {
  const { handleSubmit, register } = useForm({
    mode: "onChange",
  });

  const [isVerify, setIsVerify] = useState(false);
  const [isPasswordChecked, setIsPasswordChecked] = useState(false);

  const onSubmit = (data:any) => {
    const { password, checkPassword } = data;


    if (password !== checkPassword) {
      console.log("비밀번호 확인이 일치하지 않습니다.");
    } else {
    //
    }
  };

  return (
    <Wrapper>
      <Header />
      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Title>회원가입</Title>
          <InputField>
            <Input
              {...register("nickname")}
              placeholder="이름을 입력하세요."
              name="nickname"
              type="text"
            />
          </InputField>
          <InputField>
            <Input
              {...register("email")}
              placeholder="이메일을 입력하세요."
              name="email"
              type="email"
            />
          </InputField>
          <InputField>
            <Input
              {...register("password")}
              placeholder="비밀번호를 입력하세요."
              type="password"
              name="password"
            />
          </InputField>
          <InputField>
            <Input
              {...register("checkPassword")}
              placeholder="비밀번호를 다시 입력하세요."
              type="password"
              name="checkPassword"
            />
          </InputField>
          <SubmitButton type="submit">가입하기</SubmitButton>
          <OrText>Or 소셜로그인</OrText>
          <SocialButton type="button">카카오로 시작하기</SocialButton>
        </FormContainer>
      </Container>
      <Footer/>
    </Wrapper>
  );
}

export default SignUpContainer;

const Wrapper = styled.div`
  display: flex;
  background-color: #eae8ff;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

const Title = styled.h1`
  display: flex;
  margin-bottom: 30px;
  font-size: 20px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  background-color: white;
  border-radius: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const InputField = styled.div`
  margin-bottom: 15px;
`;
const Input = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 15px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #5649ea;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px; 
  font-size: 18px; 
  background-color: #5649ea;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #453ac4;
  }
`;

const OrText = styled.div`
  font-size: 15px;
  margin-bottom: 15px; 
`;

const SocialButton = styled(SubmitButton)`
  background-color: #fee500;
  color: black;

  &:hover {
    background-color: #e0cb08;
  }
`;