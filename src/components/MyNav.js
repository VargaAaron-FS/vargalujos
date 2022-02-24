import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import { FaChevronDown } from "react-icons/fa";

export default function MyNav() {
  // Dropdown menu hovers
  function HoverOn() {
    document.querySelector(ProductsDropDownContainer).style.display = "flex";
  }
  function HoverOff() {
    document.querySelector(ProductsDropDownContainer).style.display = "none";
  }
  return (
    <NavContainer>
      <DesktopNav>
        <HomeLink href="#">Home</HomeLink>
        <ProductsLink href="#" onMouseEnter={HoverOn} onMouseLeave={HoverOff}>
          Products{" "}
          <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} />
        </ProductsLink>
        <ProductsDropDownContainer onMouseEnter={HoverOn} onMouseLeave={HoverOff}>
            <Link href="#">Cigars</Link>
            <Link href="#">Wines</Link>
            <Link href="#">Coffee</Link>
            <Link href="#">Recipes</Link>
            <Link href="#">Accessories</Link>
          </ProductsDropDownContainer>
        <RecipesLink href="#">
          Recipes{" "}
          <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} />
        </RecipesLink>
        <AccessoriesLink href="#">
          Accessories{" "}
          <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} />
        </AccessoriesLink>
        <HistoryLink href="#">History</HistoryLink>
        <BlogLink href="#">Blog</BlogLink>
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

const ProductsDropDownContainer = styled.div`
  flex-direction: column;
  row-gap: 1rem;
  position: absolute;
  top: 0rem;
  left: 5rem;
  padding: 3rem 1rem 1rem 1rem;
  z-index: 1;
  background: #e7e7e7;
  min-width: 88px;
  border-radius: 0 0 .25rem .25rem;
  display: none;
`;

const Link = styled.a`
  display: flex;
  flex-direction: row;
  color: #151515;
  align-items: center;
  z-index: 10;
  &:hover {
    text-decoration: none;
  }
`;

const HomeLink = styled.a`
  display: flex;
  flex-direction: row;
  color: #151515;
  align-items: center;
  z-index: 10;
  &:hover {
    text-decoration: none;
  }
`;

const ProductsLink = styled.a`
  display: flex;
  flex-direction: row;
  color: #151515;
  align-items: center;
  z-index: 10;
  &:hover {
    text-decoration: none;
  }
`;

const RecipesLink = styled.a`
  display: flex;
  flex-direction: row;
  color: #151515;
  align-items: center;
  z-index: 10;
  &:hover {
    text-decoration: none;
  }
`;

const AccessoriesLink = styled.a`
  display: flex;
  flex-direction: row;
  color: #151515;
  align-items: center;
  z-index: 10;
  &:hover {
    text-decoration: none;
  }
`;

const HistoryLink = styled.a`
  display: flex;
  flex-direction: row;
  color: #151515;
  align-items: center;
  z-index: 10;
  &:hover {
    text-decoration: none;
  }
`;

const BlogLink = styled.a`
  display: flex;
  flex-direction: row;
  color: #151515;
  align-items: center;
  z-index: 10;
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
