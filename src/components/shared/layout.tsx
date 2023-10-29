import React from "react";
import styled from "styled-components";
import TopBar from "./topbar";
import Footer from "./footer";

/* This is to allow footer to stick to bottom */
export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderBodyContainer = styled.div`
  padding: 18px 195px;
  @media (max-width: 768px) {
    padding: 4px 24px;
  }
`;

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <Container>
      <TopBar />
      <HeaderBodyContainer>{children}</HeaderBodyContainer>
      <Footer />
    </Container>
  );
};

export default Layout;
