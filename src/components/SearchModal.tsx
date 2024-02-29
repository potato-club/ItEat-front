import React from "react";
import styled from "styled-components";

const SearchModal = () => {
  return (
    <Backgound>
      <Wrapper>
        <SearchInput placeholder="무엇이 궁금하신가요?" />
      </Wrapper>
    </Backgound>
  );
};

export default SearchModal;

const Backgound = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e7e7e7;
  opacity: 0.8;
  z-index: 1;
  position: absolute;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: black;
  position: abolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchInput = styled.input`
  width: 800px;
  height: 70px;
  color: black;
`;
