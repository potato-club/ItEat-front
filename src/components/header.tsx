import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Typo>ItEat</Typo>
      <MenuWrapper>
        <MenuDiv>스터디/프로젝트</MenuDiv>
      </MenuWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Typo = styled.div`
  font-size: 48px;
  color: #5649ea;
  font-style: italic;
  font-weight: 700;
`;

const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const MenuDiv = styled.div`
  font-size: 16px;
  color: black;
  font-weight: 500;
  cursor: pointer;
`;

const ExtendedMenu = styled.div`
  position: absolute;
  top: 100%; /* 메뉴 아래에 위치하도록 설정 */
  left: 0;
  width: 150px; /* 메뉴의 폭 설정 */
  background-color: #fff; /* 배경색 설정 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 그림자 설정 */
  z-index: 1; /* 다른 요소 위에 표시되도록 설정 */
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  border-radius: 5px;
`;

const ExtendedMenuItem = styled.div`
  font-size: 14px;
  color: black;
  cursor: pointer;
  &:hover {
    color: #5649ea; /* 호버 효과 설정 */
  }
`;
