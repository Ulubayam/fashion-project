import React from "react";
import styled from "styled-components";

export const Div = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
`;
export const flexDisplay = styled.div`
  display: flex;
  height: 100%;
`;
export const flexHeightResize = styled.div`
  flex: 1;
  height: 100%;
`;
export const flexHeight = styled.section`
  flex: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  height: 100%;
`;
export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  width: 263pt;
  height: 390pt;
`;
function Product(props) {
  return (
    <flexDisplay>
      <flexHeight>
        <div class="row">
          <div class="column">
            <div class="card">
              <h3>Card 1</h3>
              <p>Some text</p>
              <p>Some text</p>
            </div>
          </div>
        </div>
      </flexHeight>
    </flexDisplay>
  );
}

export default Product;
