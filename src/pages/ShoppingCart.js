import React from "react";
import styled from "styled-components";

export default function ShoppingCart() {
  return (
    <Section>
      Hello! This is the SHOPPING CART page!
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
