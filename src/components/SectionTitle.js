import React, {  } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SectionTitle(props) {
  return (
    <SectionTitleContainer>
      <H3>
        {props.sectionTitle}
      </H3>
    </SectionTitleContainer>
  );
}

const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #151515;
  border-radius: .25rem;
  justify-content: center;
  margin-top: 5rem;
  text-transform: uppercase;
`;

const H3 = styled.h3`
font-size: 2rem;
color: #fff;
padding: 1rem;
border-right: 2px solid #FFD800;
border-left: 2px solid #FFD800;
margin: .5rem;
width: 100%;
text-align: center;
@media (max-width: 640px) {
  font-size: 1.5rem;
}
@media (min-width: 1280px) {
  font-size: 2.5rem;
}
@media (min-width: 1536px) {
  font-size: 3rem;
}
`;
