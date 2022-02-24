import React, {  } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import MyLogo from "./MyLogo";

import { FaCopyright } from "react-icons/fa";

export default function MyFooter() {
  return (
    <FooterContainer>
      <h1>
        <MyLogo />
      </h1>
      <Paragraph>
        <FaCopyright style={{ marginRight: ".25rem", marginTop: ".25rem" }} /> Copyright 2022 Varga Lujos.<br />
        All rights reserved.
      </Paragraph>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #151515;
  border-radius: 0 0 .25rem .25rem;
  justify-content: center;
  @media (max-width: 768px) {
    border-radius: 0 0 47.33px 47.33px;
  }
`;

const Paragraph = styled.p`
  display: flex;
  color: #333;
  justify-content: center;
  margin: 0 0 1rem 0;
  font-size: 1rem;
  border-top: 1px solid #333;
  padding-top: 1rem;
  text-align: center;
`;
