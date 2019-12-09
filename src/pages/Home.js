import React from "react";
import { Sorter, Sidebar, ProductList } from "../components";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: "",
      order: "",
      reset: false
    };
  }

  componentDidMount() {
    document.title = "Home";
  }
  componentWillUnmount() {
    document.title = "Detail";
  }

  filterProducts = filter => {
    this.setState({
      activeFilter: filter,
      reset: false
    });
  };
  changeOrder = orderType => {
    this.setState({
      order: orderType,
      reset: false
    });
  };

  resetFilter = () => {
    this.setState(state => ({
      reset: !state.reset,
      activeFilter: "",
      order: ""
    }));
  };

  render() {
    return (
      <Wrapper>
        <Sorter order={this.changeOrder} />
        <Sidebar
          onFilterProducts={this.filterProducts}
          activeFilter={this.state.activeFilter}
          resetFilter={this.resetFilter}
        />
        <ProductList
          activeFilter={this.state.activeFilter}
          order={this.state.order}
          reset={this.state.reset}
        />
      </Wrapper>
    );
  }
}
export default Home;
