import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";

const PageButton = ({ path }: { path: string }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <StyledButton onClick={handleClick}>
      <AiOutlineArrowRight />
    </StyledButton>
  );
};

export default PageButton;
const StyledButton = styled.div`
  position: fixed;
  top: 50%;
  bottom: 20px;
  right: 20px;
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
