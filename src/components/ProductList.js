import React from "react";
import { Product } from "../components";
import axios from "axios";
import styled from "styled-components";

const Section = styled.section`
  float: right;
  width: 75%;
`;
const Cards = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _products: [],
      products: []
    };
  }
  getProducts = () => {
    const apiBaseUrl = "https://deneme.free.beeceptor.com";
    const endpoint = "/products";
    axios.get(`${apiBaseUrl}${endpoint}`).then(response => {
      const data = response.data;
      this.setState({
        _products: data,
        products: data
      });
    });
  };

  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeFilter !== this.props.activeFilter) {
      this.filterProducts();
    }
    if(this.props.reset === 'reset') {
      this.getProducts();
    }
    this.state._products.sort((product, product2) => {
      return this.compare(product.products.price, product2.products.price);
    });
  }

  compare(a, b) {
    let sortOrder = this.props.order === "high" ? 1 : -1;
    let direction = 0;
    if (a < b) {
      direction = -1;
    }
    if (a > b) {
      direction = 1;
    }
    return direction * sortOrder;
  }

  filterProducts = () => {
    let filtered = this.state._products.filter(element => {
      return element.products.badges.includes(this.props.activeFilter);
    });
    this.setState({
      products: filtered
    });
  };

  render() {
    return (
      <Section>
        <Cards>
          {this.state.products.map(item => {
            return <Product {...item} />;
          })}
        </Cards>
      </Section>
    );
  }
}
export default ProductList;
