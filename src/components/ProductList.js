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
      products: []
    };
  }
  getProducts = () => {
    const apiBaseUrl = "https://mockapi.free.beeceptor.com";
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

  componentDidUpdate() {
        this.filterProducts();
    
}
  filterProducts = () => {
     if(this.props.activeFilter === "New"){
    this.state._products.filter((item) => {
        item.products.badges.forEach((e) => {
          if(e === "new") {
          console.log(item);
          }
        })
      })
     }else {
      this.state._products.filter((item) => {
        item.products.badges.forEach((e) => {
          if(e === "discount") {
          console.log(item);
          }
        })
      })

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
