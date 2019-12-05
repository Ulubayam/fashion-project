import React from "react";
import styled from "styled-components";
import axios from "axios";

export const Cards = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;
export const Card = styled.article`
  width: 263pt;
  max-height: 390pt;
  flex: 0 0 200px;
  margin: 20px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
`;
export const Image = styled.img`
  max-width: 100%;
`;
export const Text = styled.div`
  padding: 0 20px 20px;
`;
export const Section = styled.section`
  margin: 0 1.5% 24px 1.5%;
  margin-top: 100pt;
  float: right;
  width: 63%;
`;

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  getData = () => {
    const apiBaseUrl = "https://cimri.free.beeceptor.com";
    const endpoint = "/products";
    axios.get(`${apiBaseUrl}${endpoint}`).then(response => {
      const products = response.data;
      this.setState({ products });
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Section>
        <Cards>
          {this.state.products.map((product, i) => {
            return (
              <Card key={i}>
                <Image src={product.products.imageUrl} />
                <Text>
                 {product.products.name}
                </Text>
              </Card>
            );
          })}
        </Cards>
      </Section>
    );
  }
}
