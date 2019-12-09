import React from "react";
import styled from "styled-components";

const Aside = styled.aside`
  float: left;
`;

const ListItem = styled.li`
  display: flex;
  margin-top: 10px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  flex-direction: column;
  padding: 10px 0px;
  :first-child {
    border-top: none;
  }
`;
const Link = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: black;
  font-size: 12pt;
  letter-spacing: 1pt;
  :hover {
    color: #ff6008;
  }
  :active {
    color: #ff6008;
  }
`;
const Button = styled.button`
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
  margin-left: 100pt;
`;
const List = styled.ul`
  float: left;
  list-style-type: none;
  padding: 0px 20px;
  background-color: #ececec;
`;
const Info = styled.span`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12pt;
  line-height: 40pt;
  letter-spacing: 1pt;
  float: left;
`;
const Break = styled.hr`
  border-top: 1px solid gray;
`;

function Filter(props) {
  return (
    <Aside>
      <Info>FILTERS</Info>
      <Button
        onClick={e => {
          e.preventDefault();
          props.resetFilter();
        }}
      >
        RESET
      </Button>
      <Break />
      <List>
        <ListItem>
          <Link
            onClick={e => {
              e.preventDefault();
              props.onFilterProducts("new");
            }}
            style={{ textAlign: "left" }}
          >
            > New
          </Link>
        </ListItem>
        <ListItem>
          <Link
            onClick={e => {
              e.preventDefault();
              props.onFilterProducts("discount");
            }}
          >
            > Discount
          </Link>
        </ListItem>
      </List>
    </Aside>
  );
}

export default Filter;
