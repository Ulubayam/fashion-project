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
font-size:14pt;
line-height:30pt;
`
export const Section = styled.section`
  margin: 0 1.5% 24px 1.5%;
  margin-top: 100pt;
  float: right;
  width: 63%;
`;
export const New = styled.span`
position: absolute;
right:-20px;
top:10px;
background:red;
text-align: center;
border-radius: 30px 30px 30px 30px;
color:white;
padding:5px 10px;
font-size:20px;
`
export const Discount = styled.span`
position: absolute;
left:-20px;
top:10px;
background:blue;
text-align: center;
border-radius: 30px 30px 30px 30px;
color:white;
padding:5px 10px;
font-size:20px;
`
export const Div = styled.div`
position:relative;
padding-top:20px;
display:inline-block;
`

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  getData = () => {
    const apiBaseUrl = "https://deneme.free.beeceptor.com";
    const endpoint = "/products";
    axios.get(`${apiBaseUrl}${endpoint}`).then(response => {
      const products = response.data;
      console.log(products)
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
          {
          this.state.products.map((item, i) => {
            return (
              <Card key={i}>
                <Div>
                {
                  item.products.badges.map((badge,i) => {
                   return  badge === "new" ? <New key={i}>New</New> : <Discount key={i}>Discount</Discount>
                  })
                }
                <Image src={item.products.imageUrl} />
                </Div>
                <Text>
                 {item.products.name}
                </Text>
                <Price> ${item.products.price}</Price>
              </Card>
            )
          })
          }
        </Cards>  
      </Section>
    );
  }
}
