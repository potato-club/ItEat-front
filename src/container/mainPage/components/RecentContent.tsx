import React from "react";
import styled from "styled-components";

const NewProject = () => {
  return (
    <Wrapper>
      <Title>NEW! 따근따근한 컨텐츠</Title>
      <ContentWrapper></ContentWrapper>
    </Wrapper>
  );
};

export default NewProject;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const ContentWrapper = styled.div`
  width: 90%;
  height: 400px;
  border: 2px solid #dddddd;
  border-radius: 30px;
`;

const Title = styled.h2`
  color: black;
  font-size: 20px;
`;
