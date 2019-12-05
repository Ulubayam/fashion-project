import React from "react";
import { Product } from "../components";
import axios from "axios";
import styled from "styled-components";

export const Section = styled.section`
  margin: 0 1.5% 24px 1.5%;
  margin-top: 100pt;
  float: right;
  width: 63%;
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
      products: []
    };
  }
  getProducts = () => {
    const apiBaseUrl = "https://project.free.beeceptor.com";
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

  componentDidUpdate(prevProps,nextProps) {
        this.filterProducts();
    
}
  filterProducts = () => {
      console.log(this.props.activeFilter)
     if(this.props.activeFilter === "New"){
         console.log("hey")
     }else {
         console.log("hey2")
     }
    
}

  render() {
    return (
      <Section>
        <Cards>
          {this.state.products.map((item,i) => {
            return <Product key={i} {...item} />
          })}
        </Cards>
      </Section>
    )
  }
}
export default ProductList;
