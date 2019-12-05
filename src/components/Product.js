import React from "react";
import styled from "styled-components";

export const Card = styled.article`
  width: 263pt;
  max-height: 390pt;
  flex: 0 0 200px;
  margin: 50px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
`;
export const Image = styled.img`
  max-width: 100%;
`;
export const Text = styled.div`
  padding: 0 20px 20px;
  font-size: 16pt;
  line-height: 25pt;
`;
export const Price = styled.div`
  padding: 0 20px 0px;
  font-size: 14pt;
  line-height: 30pt;
`;

export const New = styled.span`
  position: absolute;
  right: -20px;
  top: 10px;
  background: red;
  text-align: center;
  border-radius: 30px 30px 30px 30px;
  color: white;
  padding: 5px 10px;
  font-size: 20px;
`;
export const Discount = styled.span`
  position: absolute;
  left: -20px;
  top: 10px;
  background: blue;
  text-align: center;
  border-radius: 30px 30px 30px 30px;
  color: white;
  padding: 5px 10px;
  font-size: 20px;
`;
export const Div = styled.div`
  position: relative;
  padding-top: 20px;
  display: inline-block;
`;

function Product(props) {
  const { id, imageUrl, name, price, badges } = props.products;
  return (
        <Card key={name}>
          <Div>
            {badges.map(badge => {
              return badge === "new" ? (
                <New key={name}>New</New>
              ) : (
                <Discount key={name}>Discount</Discount>
              );
            })}
            <Image src={imageUrl} />
          </Div>
          <Text>{name}</Text>
          <Price> ${price}</Price>
        </Card>
  );
}
export default Product;
