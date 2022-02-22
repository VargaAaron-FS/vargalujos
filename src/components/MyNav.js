import React, {  } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import { FaChevronDown } from "react-icons/fa";

export default function MyNav() {
  return (
    <NavContainer>
      <Link href="#">Home</Link>
      <Link href="#">Products <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} /></Link>
      <Link href="#">Recipes <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} /></Link>
      <Link href="#">Accessories <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} /></Link>
      <Link href="#">History</Link>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #E7E7E7;
  padding: 1rem;
  border-radius: 0 0 .25rem .25rem;
  font-size: 1rem;
  column-gap: 3rem;
`;

const Link = styled.a`
  display: flex;
  flex-direction: row;
  color: #151515;
  align-items: center;
  &:hover {
    text-decoration: none;
  }
`;
