import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { IoMdSearch } from "react-icons/io";
import router, { Router } from "next/router";
import SearchModal from "./SearchModal";

interface MenuTypes {
  $isSelected: boolean;
}

const Header = () => {
  const [menuState, setMenuState] = useState<number | undefined>(undefined);
  const [searchState, setSearchState] = useState<boolean>(false);

  const handleSignUpClick = () => {
    router.push("/signup");
  };
  const handleMainClick = () => {
    router.push("/");
  };

  return (
    <>
      {searchState && (
        <>
          <SearchWrapper>
            <CloseBtn onClick={() => setSearchState(false)}>닫기</CloseBtn>
            <SearchModal />
          </SearchWrapper>
          <GlobalStyle />
        </>
      )}
      <Wrapper>
        <Typo onClick={handleMainClick}>EatIt</Typo>
        <MenuWrapper>
          <MenuDiv
            $isSelected={menuState === 0}
            onClick={() => setMenuState(0)}
          >
            스터디
          </MenuDiv>
          <MenuDiv
            $isSelected={menuState === 1}
            onClick={() => setMenuState(1)}
          >
            프로젝트
          </MenuDiv>
          <MenuDiv
            $isSelected={menuState === 2}
            onClick={() => setMenuState(2)}
          >
            멘토링
          </MenuDiv>
          <MenuDiv
            $isSelected={menuState === 3}
            onClick={() => setMenuState(3)}
          >
            커뮤니티
          </MenuDiv>
        </MenuWrapper>
        <LogSignBox>
          <SearchDiv>
            <IoMdSearch
              onClick={() => setSearchState(!searchState)}
              size={30}
              color="black"
            />
          </SearchDiv>
          <LoginBtn>로그인</LoginBtn>
          <SignUpBtn onClick={handleSignUpClick}>회원가입</SignUpBtn>
        </LogSignBox>
      </Wrapper>
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 5%;
  justify-content: space-between;
`;

const Typo = styled.div`
  font-size: 48px;
  color: #5649ea;
  font-style: italic;
  font-weight: 700;
  margin-left: 10%;
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  width: 450px;
  min-width: 450px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10%;
`;

const MenuDiv = styled.div<MenuTypes>`
  width: 70px;
  font-size: 20px;
  color: ${(props) => (props.$isSelected ? "#5649ea" : "black")};
  font-weight: 500;
  cursor: pointer;
`;

const LogSignBox = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-around;
  gap: 50px;
  margin-right: 50px;
  align-items: center;
`;

const LoginBtn = styled.div`
  width: 70px;
  font-size: 20px;
  color: #5649ea;
  font-weight: 500;
  cursor: pointer;
`;
const SignUpBtn = styled.div`
  width: 70px;
  font-size: 20px;
  color: #5649ea;
  font-weight: 500;
  cursor: pointer;
`;
const SearchWrapper = styled.div`
  width: 100%;
  height: 100px;
  transition: height 0.3s ease;
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const CloseBtn = styled.div`
  height: 100px;
  background-color: red;
  display: flex;
  justify-content: right;
`;

const SearchDiv = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #d0d0d0;
    border-radius: 50%;
  }
`;
