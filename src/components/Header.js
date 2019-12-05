import React from "react";
import styled from "styled-components";
import { Sorter } from "./index.js";

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const Head = styled.header`
  font-size: 24px;
  width: 100%;
  padding-right: 50px;
  height: 100px;
  background: white;
  position: fixed;
  text-align: center;
  line-height: $lh;
  top: 0;
  left: 0;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;
export const Nav = styled.nav`
  font-size: 18pt;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: lighter;
  margin-top: 12pt;
`;
export const Aside = styled.aside`
  margin: 0 1.5% 24px 1.5%;
  float: left;
  width: 30%;
`;

export const Section = styled.section`
  float: right;
  width: 63%;
`;
export const Title = styled.h1`
  font-size: 18pt;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: lighter;
  line-height: 40px;
  float: left;
  margin-top: 20pt;
  padding-left: 140pt;
`;

function Header() {
  return (
    <Wrapper>
      <Head>
        <Title>Woman</Title>
        <Sorter />
      </Head>
    </Wrapper>
  );
}

export default Header;
