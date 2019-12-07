import React from "react";
import styled from "styled-components";

export const List = styled.ul`
float:right;
`;
export const ListItem = styled.li`
  list-style: none;
  display: inline-block;
  font-size: 18pt;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: lighter;
  margin-left: 25px;
`;
export const Select = styled.select`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  border: 0;
  border-bottom: 2px solid currentcolor;
  border-radius: 0;
  background-color: #ececec;
  line-height: 20pt;
  font-size: 14pt;
  margin-top: 10px;
  &:focus,
  &:active {
    outline: 0;
    border-bottom-color: #ff6008;
  }
`;
class Sorter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
    console.log(this.state.value)
  };
  render() {
    return (
        <List>
          <ListItem>Sort By</ListItem>
          <ListItem>
            <Select
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Sort"
            >
              <option value="null">Select Option</option>
              <option value="high">High to Low price</option>
              <option value="low">Low to High price</option>
            </Select>
          </ListItem>
        </List>
    );
  }
}

export default Sorter;
