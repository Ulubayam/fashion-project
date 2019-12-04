
import React from "react";
import styled from "styled-components";
import { Sorter, Sidebar, Product } from "./index.js";

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const Head = styled.header`
  width: 100%;
  height: 100px;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;
export const Title = styled.h1`
  font-size: 18pt;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: lighter;
  line-height: 40px;
  float: left;
  padding-left: 153pt;
`;

export const Nav = styled.nav`
  float: left;
  padding-left: 40pt;
  min-width: 260pt;
  line-height: 0px;
`;

export const Section = styled.div`
float: left;
margin-top:100pt;
padding-left: 80px;
width: 70%;
height: 300px;
`;

function Header() {
  return (
    <Wrapper>
      <Head>
        <Title>Women</Title>
          <Sorter></Sorter>
      </Head>
      <Nav>
      <Sidebar/>
      </Nav>
      <Section>
        <Product></Product>
        </Section>
    </Wrapper>
  );
}

export default Header;
