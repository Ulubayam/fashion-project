import React from "react";
import styled from "styled-components";

const List = styled.ul`
list-style-type: none;
  padding: 0px 20px;
  background-color: #fff;
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
  letter-spacing: 0;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: #ff6008;
`;
export const Info = styled.span`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12pt;
  line-height: 40pt;
  letter-spacing: 1pt;
  padding-right: 140pt;
`;
export const Break = styled.hr`
  border-top: 1px solid gray;
`;

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <Info>FILTERS</Info>
        <Button>RESET</Button>
        <Break />
        <List>
          <ListItem><Link href="#">> New</Link></ListItem>
          <ListItem><Link href="#">> Sales</Link></ListItem>

        </List>
      </div>
    );
  }
}

export default Sidebar;
