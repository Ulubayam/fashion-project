import React from "react";
import { Product } from "../components";
import axios from "axios";
import styled from "styled-components";

export const Section = styled.section`
  float: right;
  width: 75%;
`;
export const Cards = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _products: [],
      products: [],
      sorted: false
    };
  }
  getProducts = () => {
    const apiBaseUrl = "https://newapi.free.beeceptor.com";
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
  }
  filterProducts = () => {
      let filtered = this.state._products.filter(element => {
        return element.products.badges.includes(this.props.activeFilter);
      });
      this.setState({
        products: filtered,
      })
    
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
