import React from "react";
import styled from "styled-components";

const Comment = () => {
  return (
    <CommentWrapper>
      <CommentWriteBox></CommentWriteBox>
    </CommentWrapper>
  );
};

export default Comment;

const CommentWrapper = styled.div`
  width: 80%;
  height: 1000px;
  border-radius: 30px;
  border: 1px solid #bababa;
  margin-top: 100px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;
const CommentWriteBox = styled.div`
  height: 300px;
  width: 90%;
  border: 1px solid #bababa;
  border-radius: 30px;
`;
