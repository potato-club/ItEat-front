import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Select, { ValueType, OptionTypeBase } from "react-select";
import { useRouter } from "next/router";
import tags from "../../../public/data/tags.json";

function SignUpTags() {
  const { handleSubmit } = useForm({
    mode: "onChange",
  });

  const [selectedTag, setSelectedTag] =
    useState<ValueType<OptionTypeBase> | null>(null);

  const router = useRouter();

  const onSubmit = (data: any) => {
    router.push("/signup-page");
  };

  const options = tags.map((tag: any) => ({
    value: tag.name,
    label: tag.name,
  }));

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: state.isFocused ? "#5649ea" : "#ccc", // 포커스됐을 때 input 보더 색 변경
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: "#5649ea", // 멀티 값 박스 배경색 변경
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: "white", // 박스 텍스트 색상
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: "white", // 삭제 아이콘 색상
      ":hover": {
        backgroundColor: "#321fdb", // 삭제 아이콘 호버
      },
    }),
  };

  return (
    <Wrapper>
      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Title>회원가입</Title>
          <SelectContainer>
            <Select
              options={options}
              value={selectedTag}
              onChange={(selectedOption) =>
                setSelectedTag(selectedOption as ValueType<OptionTypeBase>)
              }
              isMulti
              placeholder="원하는 태그를 선택해주세요"
              styles={customStyles}
            />
          </SelectContainer>
        </FormContainer>
      </Container>
    </Wrapper>
  );
}

export default SignUpTags;

const Wrapper = styled.div`
  display: flex;
  background-color: #eae8ff;
  justify-content: center;
  align-items: center;
  color: black;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 500px;
  padding: 100px;
  background-color: white;
  border-radius: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  display: flex;
  margin-bottom: 30px;
  font-size: 20px;
  text-align: center;
`;

const SelectContainer = styled.div`
  width: 300px;
`;

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
