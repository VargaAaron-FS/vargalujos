import React, {  } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import {  } from "react-icons/ri";

import VargaLujosLogo from "../images/logo.svg";

export default function MyHeader() {
  return (
    <HeaderContainer>
      <LogoImg src={VargaLujosLogo} />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  background: #000;
  border-radius: .25rem .25rem 0 0;
`;

const LogoImg = styled.img`
  height: 100px;
  margin: auto;
  padding: 1rem;
`;
