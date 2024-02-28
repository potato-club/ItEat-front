import React from "react";
import Header from "../../components/header";
import styled from "styled-components";
import RecentProject from "./components/RecentContent";
import PopularProject from "./components/PopularContent";

const MainPage = () => {
  return (
    <>
      <Wrapper>
        <Banner />
        <RecentProject />
        <PopularProject />
      </Wrapper>
    </>
  );
};

export default MainPage;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 150px;
  z-index: 1;
`;

const Banner = styled.div`
  width: 100%;
  height: 300px;
  background-color: aliceblue;
`;
