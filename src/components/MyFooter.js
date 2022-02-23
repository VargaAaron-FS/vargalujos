import React, {  } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import MyLogo from "./MyLogo";

export default function MyFooter() {
  return (
    <FooterContainer>
      <h1>
        <MyLogo />
      </h1>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  background: #151515;
  border-radius: 0 0 .25rem .25rem;
  justify-content: center;
`;
