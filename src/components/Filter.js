import React from "react";
import styled from "styled-components";

const Aside = styled.aside`
margin: 0 1.5% 24px 1.5%;
margin-top:100pt;
float: left;
width: 20%;
`;

const ListItem = styled.li`
  display: flex;
  margin-top:10px;;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  flex-direction: column;
  padding: 10px 0px;
  :first-child {
    border-top: none;
  }
`;
const Link = styled.a`
text-decoration: none;
color: black;
:hover {
  color: #ff6008;
}
:active {
  text-decoration: underline;
}
`
export const Button = styled.button`
font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
background-color: transparent;
background-repeat: no-repeat;
font-size: 12pt;
line-height: 40pt;
letter-spacing: 1pt;
border: none;
cursor: pointer;
overflow: hidden;
outline: none;
color: #ff6008;
 margin-left:100pt;
`;
const List = styled.ul`
list-style-type: none;
  padding: 0px 20px;
  background-color: #fff;
`;
export const Info = styled.span`
font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
font-size: 12pt;
line-height: 40pt;
letter-spacing: 1pt;
float: left;
`;
export const Break = styled.hr`
border-top: 1px solid gray;
`;

function Filter(props) {
  return (
    <Aside>
    <Info>FILTERS</Info>
    <Button>RESET</Button>
    <Break />
    <List>
      <ListItem><Link href="#">> New</Link></ListItem>
      <ListItem><Link href="#">> Sales</Link></ListItem>
    </List>
  </Aside>
  );
}

export default Filter;
