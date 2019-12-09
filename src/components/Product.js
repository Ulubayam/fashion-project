import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.article`
  width: 263pt;
  max-height: 390pt;
  flex: 0 0 200px;
  margin: 50px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
`;
const Image = styled.img`
  max-width: 100%;
`;
const Text = styled.div`
  padding: 0 20px 20px;
  font-size: 16pt;
  line-height: 25pt;
  color: black;
`;
const Price = styled.div`
  padding: 0 20px 0px;
  font-size: 14pt;
  line-height: 30pt;
  color: black;
`;

const New = styled.span`
  position: absolute;
  left: -20px;
  top: 10px;
  background: #ff6008;
  text-align: center;
  color: white;
  padding: 5px 10px;
  font-size: 20px;
`;
const Discount = styled.span`
  position: absolute;
  right: -20px;
  top: 10px;
  background: cornflowerblue;
  text-align: center;
  color: white;
  padding: 5px 10px;
  font-size: 20px;
`;
const Div = styled.div`
  position: relative;
  padding-top: 20px;
  display: inline-block;
`;

function Product(props) {
  const { id, imageUrl, name, price, badges } = props.products;
  return (
    <Card>
      <Link
        to={{
          pathname: `/detail/${id}`,
          products: props
        }}
        style={{ textDecoration: "none" }}
      >
        <Div>
          {badges.map(badge => {
            return badge === "discount" ? (
              <Discount>Discount</Discount>
            ) : (
              <New>New</New>
            );
          })}
          <Image src={imageUrl} />
        </Div>
        <Text>{name}</Text>
        <Price> ${price}</Price>
      </Link>
    </Card>
  );
}
export default Product;
