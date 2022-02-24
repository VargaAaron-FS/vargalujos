import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FooterNav() {
  return (
    <NavContainer>
      <DesktopNav>
        <Link href="#">Home</Link>
        <Link href="#">
          Products
        </Link>
        <Link href="#">
          Recipes
        </Link>
        <Link href="#">
          Accessories
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
  border-radius: 0.25rem 0.25rem 0 0;
  font-size: 1rem;
  column-gap: 3rem;
  margin-top: 5rem;
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
