import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";

function SignUpContainer() {
  const { handleSubmit, register } = useForm({
    mode: "onChange",
  });


  const onSubmit = (data:any) => {
  };

  return (
    <Wrapper>
      <Header />
      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
        </FormContainer>
      </Container>
      <Footer/>
    </Wrapper>
  );
}

export default SignUpContainer;

const Wrapper = styled.div`
  display: flex;
  background-color: #ececec;
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
  background-color: #f2f2f2;
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