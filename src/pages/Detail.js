import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
  width: 380px;
  position: relative;
  box-shadow: 0 2px 7px #dfdfdf;
  margin: 50px auto;
  background: #fafafa;
`;
const Image = styled.img`
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
`;
const Details = styled.div`
  padding: 5px;
`;
const Span = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ccc;
  margin-bottom: 18px;
`;
const Header = styled.h4`
  font-weight: 500;
  display: block;
  margin-bottom: 18px;
  text-transform: uppercase;
  color: #363636;
  text-decoration: none;
  transition: 0.3s;
`;

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: {}
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = () => {
    const id = this.props.match.params.id;
    const apiBaseUrl = "https://productapi.free.beeceptor.com";
    const endpoint = "/product/" + id;
    axios.get(`${apiBaseUrl}${endpoint}`).then(response => {
      this.setState({
        productDetail: response.data[0].products
      });
    });
  };

  render() {
    const {imageUrl, content, price } = this.state.productDetail;
    return (
      <Card>
        <Container>
          <Image src={imageUrl} />
        </Container>
        <Details>
          <Span>Woman</Span>
          <Header>${price}</Header>
          <p>{content}</p>
        </Details>
      </Card>
    );
  }
}

export default Detail;
