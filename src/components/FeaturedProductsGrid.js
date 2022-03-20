import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FeaturedProductsGrid(props) {
  return (
    <FeaturedProductsContainer>
      <FlexGroup>
        <FlexItem>
          <ItemImage src={props.itemOneImgUrl} />
          <ProductTitle>{props.productOneTitle}</ProductTitle>
          <Price>{props.prodOnePrice}</Price>
        </FlexItem>
        <FlexItem>
          <ItemImage src={props.itemTwoImgUrl} />
          <ProductTitle>{props.productTwoTitle}</ProductTitle>
          <Price>{props.prodTwoPrice}</Price>
        </FlexItem>
      </FlexGroup>
      <FlexGroup>
        <FlexItem>
          <ItemImage src={props.itemThreeImgUrl} />
          <ProductTitle>{props.productThreeTitle}</ProductTitle>
          <Price>{props.prodThreePrice}</Price>
        </FlexItem>
        <FlexItem>
          <ItemImage src={props.itemFourImgUrl} />
          <ProductTitle>{props.productFourTitle}</ProductTitle>
          <Price>{props.prodFourPrice}</Price>
        </FlexItem>
      </FlexGroup>
    </FeaturedProductsContainer>
  );
}

const FeaturedProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  column-gap: 1rem;
  @media (max-width: 768px) {
    row-gap: 1rem;
    flex-direction: column;
  }
`;

const FlexGroup = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
`;

const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid #c4c4c4;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const ProductTitle = styled.p`
  margin: 0;
  margin-top: 1rem;
  text-align: center;
`;

const Price = styled.p`
  margin: 0;
  margin-top: 0.5rem;
  text-align: center;
  @media (max-width: 1024px) {
    margin-top: 0rem;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  border-radius: 0.25rem;
`;
