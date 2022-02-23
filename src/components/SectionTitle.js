import React, {  } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SectionTitle(props) {
  return (
    <SectionTitleContainer>
      <h3 style={{ fontSize: "2rem", color: "#fff", padding: "1rem", borderRight: "2px solid #FFD800", borderLeft: "2px solid #FFD800", margin: ".5rem", width: "100%", textAlign: "center" }}>
        {props.sectionTitle}
      </h3>
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
