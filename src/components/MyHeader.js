import React, {  } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import MyLogo from "./MyLogo";

export default function MyHeader() {
  return (
    <HeaderContainer>
      <h1>
        <MyLogo />
      </h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  background: #151515;
  border-radius: .25rem .25rem 0 0;
  justify-content: center;
`;
