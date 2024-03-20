import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

interface PageButtonProps {
  onClick: () => void;
  isLeft: boolean;
}

const PageButton: React.FC<PageButtonProps> = ({ onClick, isLeft }) => {
  return (
    <StyledButton isLeft={isLeft} onClick={onClick}>
      {isLeft ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
    </StyledButton>
  );
};

export default PageButton;

const StyledButton = styled.div`
  position: fixed;
  top: 50%;
  bottom: 20px;
  ${(props) => (props.isLeft ? "left: 20px;" : "right: 20px;")}
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #5649ea;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
