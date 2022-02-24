import React, {  } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CategoryCardLong(props) {
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
  aspect-ratio: 2/1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 1rem;
  @media (max-width: 640px) {
    aspect-ratio: 2/1;
  }
  @media (min-width: 768px) {
    aspect-ratio: 4/1;
    margin-top: 0;
  }
  @media (min-width: 1280px) {
    aspect-ratio: 4/1;
    margin-top: 0rem;
  }
`;

const TintCover = styled.div`
  display: flex;
  flex-direction: row;
  background-color:rgba(21, 21, 21, 0.5);
  border-radius: .25rem;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
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
  font-size: 3rem;
}
`;
