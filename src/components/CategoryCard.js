import React, {  } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CategoryCard(props) {
  return (
    <CategoryCardContainer style={{ backgroundImage: `url(${props.bgImgUrl})` }}>
      <TintCover>
        <H2>
          {props.categoryTitle}
        </H2>
      </TintCover>
    </CategoryCardContainer>
  );
}

const CategoryCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #151515;
  border-radius: .25rem;
  justify-content: center;
  cursor: pointer;
  aspect-ratio: 1/1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const TintCover = styled.div`
  display: flex;
  flex-direction: row;
  background-color:rgba(21, 21, 21, 0.5);
  border-radius: .25rem;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  aspect-ratio: 1/1;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    background-color:rgba(21, 21, 21, 0);
  }
`;

const H2 = styled.h2`
color: #fff;
text-transform: uppercase;
border-bottom: 2px solid #FFD800;
align-self: center;
font-size: 2rem;
text-shadow: 0px 0px 2rem #151515;
@media (max-width: 640px) {
  font-size: 1.5rem;
}
@media (min-width: 1536px) {
  font-size: 2.5rem;
}
`;
