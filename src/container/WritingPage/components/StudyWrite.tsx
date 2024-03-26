import React from "react";
import styled from "styled-components";

const StudyWrite = () => {
  return (
    <Wrapper>
      <TitleBox placeholder="제목" />
      <TagBox>태그</TagBox>
      <StudyInfo placeholder="스터디 일정" />
      <DueBox>
        <p>모집 기간</p>
        <DueInput type="date" /> ~
        <DueInput type="date" />
      </DueBox>
      <CallInfo placeholder="연락처" />
      <WriteButtonBox>
        <WriteButton> 글 작성</WriteButton>
      </WriteButtonBox>
    </Wrapper>
  );
};

export default StudyWrite;
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

const StudyInfo = styled.textarea`
  border: 2px solid #bababa;
  border-radius: 30px;
  width: 100%;
  padding: 20px;
  height: 300px;
  color: black;
  resize: none;
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

const CallInfo = styled.input`
  border: 2px solid #bababa;
  border-radius: 30px;
  width: 100%;
  padding: 0px 10px 0px 10px;
  height: 50px;
  color: black;
`;
const WriteButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const WriteButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #5649ea;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  border-radius: 30px;
`;
