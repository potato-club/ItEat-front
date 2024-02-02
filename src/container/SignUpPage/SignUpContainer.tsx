import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/header";

function SignUpContainer() {

  const [signUpForm, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    nickname: "",
    role: ""
  });

  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...signUpForm, [name]: value });
  };

  const handleRoleChange = (role: string) => {
    setFormData({ ...signUpForm, role });
  };

  return (
    <>
      <Header />
      <Container>
        <FormContainer>
        <Title>회원가입</Title>
          <RoleButtonContainer>
            <RoleButton
              selected={signUpForm.role == "mentor"}
              onClick={() => handleRoleChange("mentor")}
            >
              멘토
            </RoleButton>
            <RoleButton
              selected={signUpForm.role == "mentee"}
              onClick={() => handleRoleChange("mentee")}
              >
              멘티
            </RoleButton>
          </RoleButtonContainer>
          <InputField>
            <Inputname>이름</Inputname>
            <Input
              placeholder="이름을 입력하세요."
              type="text"
              name="username"
              value={signUpForm.username}
              onChange={handleChange}
            />
          </InputField>
          <InputField>
            <Inputname>이메일</Inputname>
            <Input
              placeholder="이메일을 입력하세요."
              type="email"
              name="email"
              value={signUpForm.email}
              onChange={handleChange}
            />
          </InputField>
          <InputField>
            <Inputname>닉네임</Inputname>
            <Input
              placeholder="닉네임을 입력하세요."
              type="text"
              name="nickname"
              value={signUpForm.nickname}
              onChange={handleChange}
            />
          </InputField>
          <InputField>
            <Inputname>비밀번호</Inputname>
            <Input
              placeholder="비밀번호를 입력하세요."
              type="password"
              name="password"
              value={signUpForm.password}
              onChange={handleChange}
            />
          </InputField>
          <Button type="submit">가입하기</Button>
          Or 소셜로그인
          <Button type="button">카카오로 시작하기</Button>
        </FormContainer>
      </Container>
    </>
  );
}

export default SignUpContainer;

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
`;

const FormContainer = styled.form`
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const InputField = styled.div`
  margin-bottom: 15px;
`;

const Inputname = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const RoleButtonContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const RoleButton = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 10px;
  background-color: ${({ selected }) => (selected ? "#5649EA" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#5649EA")};
  border: 1px solid #5649EA;
  border-radius: 3px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #5649EA;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;