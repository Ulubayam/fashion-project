import React from "react";
import { Sorter, Sidebar, ProductList } from "../components";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top:20px;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: "",
      order: "",
      reset: ""
    };
  }

  componentDidMount() {
    document.title = "Home";
  }
  componentWillUnmount() {
    document.title = "Fashion";
  }

  filterProducts = (filter) => {
    this.setState({
      activeFilter: filter
    });
  };
  changeOrder=(orderType)=> {
    this.setState({
      order: orderType
    })
  };

  resetFilter = (reset) => {
    this.setState({
      reset: reset
    })
  }

  render() {
    return (
      <Wrapper>
      <Sorter order={this.changeOrder}/>
        <Sidebar
          onFilterProducts={this.filterProducts}
          activeFilter={this.state.activeFilter}
          resetFilter = {this.resetFilter}
        />
        <ProductList activeFilter={this.state.activeFilter} order={this.state.order} reset={this.state.reset} />
      </Wrapper>
    );
  }
}
export default Home;