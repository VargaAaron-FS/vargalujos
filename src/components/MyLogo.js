import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import VargaLujosLogo from "../images/logo.png";

export default function MyLogo() {
  return (
    <LogoContainer>
      <LogoLink to="/">
        <LogoImage src={VargaLujosLogo} alt="Varga Lujos Logo" />
      </LogoLink>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2rem 1rem;
  margin: auto;
`;

const LogoImage = styled.img`
  cursor: pointer;
  width: 100%;
  max-width: 1000px;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;
