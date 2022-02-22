import React, {  } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import VargaLujosLogo from "../logo.svg";

export default function MyLogo() {
  return (
    <LogoContainer>
      <LogoImage src={VargaLujosLogo} alt="Varga Lujos Logo" />
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
  height: 100px;
  margin: auto;
`;

const LogoImage = styled.img`
  cursor: pointer;
`;
