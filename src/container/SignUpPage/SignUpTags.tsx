import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import tags from "../../../public/data/tags.json";

function SignUpTags() {
  const { handleSubmit } = useForm({
    mode: "onChange",
  });

  const [search, setSearch] = useState("");
  const onChange = (e: any) => {
    setSearch(e.target.value);
  };

  const filteredTags = tags.filter((tag) => {
    return tag.name
      .replace(" ", "")
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase().replace(" ", ""));
  });

  const onSubmit = (data: any) => {};

  // const handleTagClick = (tagName) => {
  //     setSearch(tagName);
  // };

  return (
    <Wrapper>
      <Header />
      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Title>회원가입</Title>
          <Input
            type="text"
            value={search}
            onChange={onChange}
            placeholder="원하시는 태그를 입력해주세요"
          />
        </FormContainer>
        <TagList>
          {filteredTags.map((tag) => (
            <Tag key={tag.id}>{tag.name}</Tag>
          ))}
        </TagList>
      </Container>
      <Footer />
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

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const TagList = styled.div`
  margin-top: 20px;
`;

const Tag = styled.span`
  display: inline-block;
  padding: 5px 10px;
  margin: 5px 5px;
  background-color: #5649ea;
  color: white;
  border-radius: 5px;
`;
