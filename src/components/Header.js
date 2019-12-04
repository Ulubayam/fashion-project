import React from "react";
import styled from "styled-components";
import { Sorter } from "./index.js";

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
export const Info = styled.span`
 font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12pt;
  line-height: 40pt;
  letter-spacing: 1pt;
  padding-right:140pt;
`;
export const Sort = styled.h2`
  float: right;
  padding-right: 35px;
  font-size: 18pt;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: lighter;
  font-weight: bold;
  line-height: 40px;
`;
export const Nav = styled.nav`
  float: left;
  padding-left: 40pt;
  min-width: 260pt;
  line-height: 0px;
`;
export const Button = styled.button`
 font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  background-color: transparent;
  background-repeat: no-repeat;
  font-size: 12pt;
  line-height: 40pt;
  letter-spacing: 0;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: #ff6008;
`;

export const Section = styled.section`
  max-width: 260pt;
  float: right;
`;
export const Break = styled.hr`
border-top: 1px solid gray;
`

function Header() {
  return (
    <Wrapper>
      <Head>
        <Title>Women</Title>
        <Sort>
          <Sorter></Sorter>
        </Sort>
        <Sort>Sort by</Sort>
      </Head>
      <Nav>
        <Info>FILTERS</Info>
        <Button>RESET</Button>
        <Break/>
      </Nav>
      <Section>Filters</Section>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Women</a>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                               
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
    </Wrapper>
  );
}

export default Header;
