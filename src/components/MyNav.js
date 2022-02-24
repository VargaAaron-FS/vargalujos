import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import { FaChevronDown } from "react-icons/fa";

export default function MyNav() {
  return (
    <NavContainer>
      <DesktopNav>
        <Link href="#">Home</Link>
        <Link href="#">
          Products{" "}
          <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} />
        </Link>
        <ProductsDropDownContainer className="dropdown">
            <Link href="#">Cigars</Link>
            <Link href="#">Wines</Link>
            <Link href="#">Coffee</Link>
            <Link href="#">Recipes</Link>
            <Link href="#">Accessories</Link>
          </ProductsDropDownContainer>
        <Link href="#">
          Recipes{" "}
          <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} />
        </Link>
        <Link href="#">
          Accessories{" "}
          <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} />
        </Link>
        <Link href="#">History</Link>
      </DesktopNav>
      <MobileNav>Mobile Nav</MobileNav>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #e7e7e7;
  padding: 1rem;
  border-radius: 0 0 0.25rem 0.25rem;
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

const DesktopNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1rem;
  column-gap: 3rem;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const ProductsDropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  position: absolute;
  top: 2.56rem;
  left: 5rem;
  padding: 1rem;
  z-index: 1;
  background: #e7e7e7;
  min-width: 88px;
  border-radius: 0 0 .25rem .25rem;
  display: none;
`;
