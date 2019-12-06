import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const Head = styled.header`
  font-size: 24px;
  width: 100%;
  height: 100px;
  background: white;
  line-height: 1px;
  -webkit-box-shadow: 2px 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 2px 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 3px 7px 5px rgba(57, 63, 72, 0.3);
`;
export const Nav = styled.nav`
  font-size: 18pt;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: lighter;
  margin-top: 12pt;
`;
export const Aside = styled.aside`
  float: left;
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
  text-align:center;
  padding-top: 25px;
`;

function Header() {
  return (
    <Wrapper>
      <Head>
        <Title>Woman</Title>
      </Head>
    </Wrapper>
  );
}

export default Header;
