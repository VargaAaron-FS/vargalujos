import React, {  } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MyHeader(props) {
  return (
    <CategoryCardContainer style={{ backgroundImage: `url(${props.bgImgUrl})` }}>
      <TintCover>
        <h2 style={{ color: "#fff", textTransform: "uppercase", borderBottom: "2px solid #FFD800", alignSelf: "center", fontSize: "2rem", textShadow: "0px 0px 2rem #151515" }}>
          {props.categoryTitle}
        </h2>
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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    background-color:rgba(21, 21, 21, 0);
  }
`;
