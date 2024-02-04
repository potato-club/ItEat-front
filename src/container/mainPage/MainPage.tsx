import React from "react";
import Header from "@/components/header";
import styled from "styled-components";
const MainPage = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;
