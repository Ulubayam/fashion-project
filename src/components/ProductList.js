import React from "react";
import { Product } from "../components";
import axios from "axios";
import styled from "styled-components";
import { getKeyByValue } from "../helpers";

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
    const apiBaseUrl = "https://productapi.free.beeceptor.com";
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
    if (this.props.activeFilter === "New") {
      this.state._products.map(item => {
        item.products.badges.find(elem => {
          if (elem === "new") {
            console.log(item);
          }
        });
      });
    } else if (this.props.activeFilter === "Discount") {
      this.state._products.filter(item => {
        let obj = getKeyByValue(item.products.badges, "new");
        console.log(obj);
      });
      // this.state.products.map((item) => {
      //   item.products.badges.find((elem) => {
      //     if(elem === "discount") {
      //      this.setState({
      //        products: [...this.state.products].concat([item])
      //      })
      //     }
      //   })
      // })
    }
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
