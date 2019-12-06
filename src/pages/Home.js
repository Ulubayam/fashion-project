import React from "react";
import { Sorter, Sidebar, ProductList } from "../components";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top:20px;
`;
export const Head = styled.header`
  font-size: 24px;
  width: 100%;
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
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: ""
    };
  }

  componentDidMount() {
    document.title = "Home";
  }
  componentWillUnmount() {
    document.title = "Fashion";
  }

  filterProducts = filter => {
    this.setState({
      activeFilter: filter
    });
  };

  render() {
    return (
      <Wrapper>
     <Sorter />
        <Sidebar
          onFilterProducts={this.filterProducts}
          activeFilter={this.state.activeFilter}
        />
        <ProductList activeFilter={this.state.activeFilter} />
      </Wrapper>
    );
  }
}
export default Home;