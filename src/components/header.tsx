import React, { useState } from "react";
import styled from "styled-components";
const Header = () => {
  return(
    <Wrapper>
    <Navigation>
        <Logo><img src="" alt="logo"/></Logo>
        <NavItem href="#">스터디/프로젝트</NavItem>
        <NavItem href="#">멘토링</NavItem>
        <NavItem href="#">커뮤니티</NavItem>
      </Navigation>
      </Wrapper>
);
}

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 50px;
`;


const Navigation = styled.nav`
  background-color: white;
  padding: 30px 0;
  text-align: center;
  display: flex;
`;

const Logo = styled.p`
`
const NavItem = styled.a`
  color: Black;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;