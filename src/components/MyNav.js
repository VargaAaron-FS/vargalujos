import React, {  } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import {  } from "react-icons/ri";

export default function MyNav() {
  return (
    <NavContainer>
      Nav
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 100%;
  background: #eee;
  padding: 1rem;
  border-radius: 0 0 .25rem .25rem;
  font-size: 1rem;
`;
