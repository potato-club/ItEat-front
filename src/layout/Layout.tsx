import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Header from "@/components/header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div``;
