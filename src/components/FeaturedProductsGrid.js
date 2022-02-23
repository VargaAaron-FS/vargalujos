import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FeaturedProductsGrid(props) {
  return (
    <FeaturedProductsGridContainer>
      <GridItem>
        <ItemImage src={props.itemOneImgUrl} />
        <Description>{props.productOneDescription}</Description>
        <Price>{props.prodOnePrice}</Price>
      </GridItem>
      <GridItem>
        <ItemImage src={props.itemTwoImgUrl} />
        <Description>{props.productTwoDescription}</Description>
        <Price>{props.prodTwoPrice}</Price>
      </GridItem>
      <GridItem>
        <ItemImage src={props.itemThreeImgUrl} />
        <Description>{props.productThreeDescription}</Description>
        <Price>{props.prodThreePrice}</Price>
      </GridItem>
    </FeaturedProductsGridContainer>
  );
}

const FeaturedProductsGridContainer = styled.div`
  display: grid;
  margin-top: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  column-gap: 1rem;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid #c4c4c4;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const Description = styled.p`
  margin: 0;
  margin-top: 1rem;
`;

const Price = styled.p`
  margin: 0;
  margin-top: .5rem;
`;

const ItemImage = styled.img`
  width: 100%;
`;
