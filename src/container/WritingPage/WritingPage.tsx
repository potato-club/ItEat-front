import React, { useState } from "react";
import styled from "styled-components";
import Category from "@/components/Cetegory";
import MentoringWrite from "./components/MentoringWrite";
import ProjectWrite from "./components/ProjectWrite";
import StudyWrite from "./components/StudyWrite";
interface MenuTypes {
  $isSelected: boolean;
}
const WritingPage = () => {
  const [menuState, setMenuState] = useState<number>(0);

  return (
    <Wrapper>
      {/* <Category /> */}

      <WriteWrapper>
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
        </MenuWrapper>
        {menuState === 0 && <StudyWrite />}
        {menuState === 1 && <ProjectWrite />}
        {menuState === 2 && <MentoringWrite />}
      </WriteWrapper>
    </Wrapper>
  );
};

export default WritingPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  row-gap: 30px;
  flex-direction: column;
  margin-top: 20px;
`;

const WriteWrapper = styled.div`
  width: 70%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 50px;
  border: 2px solid #bababa;
  border-radius: 30px;
  padding: 30px;
`;

const MenuWrapper = styled.div`
  min-width: 450px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10%;
`;

const MenuDiv = styled.div<MenuTypes>`
  width: 70px;
  font-size: 20px;
  color: ${(props) => (props.$isSelected ? "#5649ea" : "black")};
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;
