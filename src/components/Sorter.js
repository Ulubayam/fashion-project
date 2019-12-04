import React from "react";
import styled from "styled-components";

export const Select = styled.select`
  margin-bottom: 1em;
  padding: .25em;
  border: 0;
  border-bottom: 2px solid currentcolor; 
  font-weight: bold;
  letter-spacing: .15em;
  border-radius: 0;
  &:focus, &:active {
    outline: 0;
    border-bottom-color: red;
  }

`
class Sorter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleChange = (event) =>{
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div>
        <Select value={this.state.value} onChange={this.handleChange} placeholder="Sort">
          <option value="high">High to Low price</option>
          <option value="low">Low to High price</option>
        </Select>
      </div>
    );
  }
}

export default Sorter;
