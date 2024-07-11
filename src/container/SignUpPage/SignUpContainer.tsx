import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSignUp } from "@/hooks/useSignUp";
import { signUp } from "@/api/controller/signUp";

function SignUpContainer() {
  const {
    handleSubmit,
    register,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      nickname: "",
      email: "",
      password: "",
      checkPassword: "",
    },
  });

  const checkPassword = watch("checkPassword");
  const password = watch("password");

  useEffect(() => {
    if (password !== checkPassword && checkPassword) {
      setError("checkPassword", {
        type: "password-mismatch",
        message: "비밀번호가 일치하지 않습니다",
      });
    } else {
      clearErrors("checkPassword");
    }
  }, [password, checkPassword, setError, clearErrors]);

  const onSubmit = async (data: any) => {
    const { nickname, email, password } = data;
    const tags = "html";

    try {
      await signUp(nickname, email, password, tags);
      alert("회원가입에 성공하였습니다");
    } catch (error) {
      alert("회원가입 중 오류가 발생했습니다");
    }
  };
  return (
    <Wrapper>
      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Title>회원가입</Title>
          <InputField>
            <Input
              {...register("nickname", { required: "이름을 입력하세요." })}
              placeholder="이름을 입력하세요."
              name="nickname"
              type="text"
            />
            {errors.nickname && (
              <ErrorMessage>{errors.nickname.message}</ErrorMessage>
            )}
          </InputField>
          <InputField>
            <Input
              {...register("email", { required: "이메일을 입력하세요." })}
              placeholder="이메일을 입력하세요."
              name="email"
              type="email"
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </InputField>
          <InputField>
            <Input
              {...register("password", {
                required: "비밀번호를 입력하세요.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 최소 8자 이상이어야 합니다.",
                },
              })}
              placeholder="비밀번호를 입력하세요."
              type="password"
              name="password"
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </InputField>
          <InputField>
            <Input
              {...register("checkPassword", {
                required: "비밀번호를 다시 입력하세요.",
              })}
              placeholder="비밀번호를 다시 입력하세요."
              type="password"
              name="checkPassword"
            />
            {errors.checkPassword && (
              <ErrorMessage>{errors.checkPassword.message}</ErrorMessage>
            )}
          </InputField>
          <SubmitButton type="submit">가입하기</SubmitButton>
        </FormContainer>
      </Container>
    </Wrapper>
  );
}

export default SignUpContainer;

const Wrapper = styled.div`
  display: flex;
  background-color: #eae8ff;
  color: black;
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
  width: 500px;
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
  color: black;
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

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  margin-left: 5px;
`;
