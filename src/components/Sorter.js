import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
float: right;
padding-right: 153px;
`
export const Select = styled.select`
font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  border: 0;
  border-bottom: 2px solid currentcolor; 
  border-radius: 0;
  background-color: white;
  line-height:20pt;
  margin-top:20pt;
  font-size: 14pt;
  &:focus, &:active {
    outline: 0;
    border-bottom-color: #ff6008;
  }
`
export const Sort = styled.h2`
float: left;
padding-left: 25pt;
margin-right: 25pt;
font-size: 18pt;
font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
font-weight: lighter;
font-weight: bold;
line-height: 40px;
`;
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
      <Wrapper>
         <Sort>Sort by</Sort>
        <Select value={this.state.value} onChange={this.handleChange} placeholder="Sort">
          <option value="high">High to Low price</option>
          <option value="low">Low to High price</option>
        </Select>
       
      </Wrapper>
    );
  }
}

export default Sorter;
