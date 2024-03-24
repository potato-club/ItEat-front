import React, { useState } from "react";
import styled from "styled-components";

interface Role {
  checked: boolean;
}
const MentoringWrite = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <Wrapper>
      <ToggleDiv>
        <label htmlFor="toggle" className="toggleSwitch">
          <ToggleInput
            type="checkbox"
            id="toggle"
            checked={checked}
            onChange={handleToggle}
          />
          <ToggleContainer checked={checked}>
            <ToggleButton checked={checked} />
          </ToggleContainer>
        </label>
        {checked ? "멘토링" : "멘티"}
      </ToggleDiv>

      <TitleBox placeholder="제목" />
      <TagBox>태그</TagBox>
      <MentoringInfo placeholder="멘토링 일정 및 개요" />
      <CallInfo placeholder="연락방법" />
      <DueBox>
        <p>모집 기간</p>
        <DueInput type="date" /> ~
        <DueInput type="date" />
      </DueBox>
      <WriterInfo placeholder="노션,깃허브 주소" />
    </Wrapper>
  );
};

export default MentoringWrite;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;
const TitleBox = styled.input`
  border: 2px solid #bababa;
  border-radius: 30px;
  width: 100%;
  padding: 0px 10px 0px 10px;
  height: 50px;
  color: black;
`;
const TagBox = styled.div`
  border: 2px solid #bababa;
  border-radius: 30px;
  width: 100%;
  padding: 0px 10px 0px 10px;
  height: 50px;
  color: black;
  display: flex;
  align-items: center;
`;
const ToggleDiv = styled.div`
  color: black;
  display: flex;
  align-items: center;
  gap: 20px;
`;
const ToggleContainer = styled.div<Role>`
  width: 100px;
  height: 50px;
  display: block;
  position: relative;
  border-radius: 30px;
  background: ${(props) => (props.checked ? "#5649ea" : "white")};
  box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 16px 3px rgba(0, 0, 0, 0.3);
  }
`;

const ToggleButton = styled.span<Role>`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.checked ? "calc(100% - 44px)" : "4px")};
  transform: translateY(-50%);
  border-radius: 50%;
  background: ${(props) => (props.checked ? "#fff" : "#5649ea")};
  transition: left 0.2s ease-in, background 0.2s ease-in;
`;
const ToggleInput = styled.input`
  display: none;
`;
const CallInfo = styled.input`
  border: 2px solid #bababa;
  border-radius: 30px;
  width: 100%;
  padding: 0px 10px 0px 10px;
  height: 50px;
  color: black;
`;
const DueBox = styled.div`
  border: 2px solid #bababa;
  border-radius: 30px;
  width: 100%;
  padding: 0px 10px 0px 10px;
  height: 50px;
  color: black;
  display: flex;
  align-items: center;
  gap: 20px;
`;
const DueInput = styled.input`
  border: 2px solid #bababa;
  border-radius: 30px;
  width: 20%;
  padding: 0px 10px 0px 10px;
  color: black;
`;

const WriterInfo = styled.input`
  border: 2px solid #bababa;
  border-radius: 30px;
  width: 100%;
  padding: 0px 10px 0px 10px;
  height: 50px;
  color: black;
`;

const MentoringInfo = styled.textarea`
  border: 2px solid #bababa;
  border-radius: 30px;
  width: 100%;
  padding: 20px;
  height: 300px;
  color: black;
  resize: none;
`;
