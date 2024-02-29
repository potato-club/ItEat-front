import React from "react";
import styled from "styled-components";

const PopularProject = () => {
  return (
    <Wrapper>
      <Title> HOT! 지금 HOT한 컨텐츠</Title>
      <ContentWrapper></ContentWrapper>
    </Wrapper>
  );
};

export default PopularProject;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 150px;
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
