import React from "react";
import styled from "styled-components";

export default function AlcoholProduct() {
  return (
    <Section>
      Hello! This is the ALCOHOL PRODUCT page!
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem;
  color: #000;
`;
