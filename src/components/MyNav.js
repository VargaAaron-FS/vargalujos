import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import { FaChevronDown } from "react-icons/fa";

// Products dropdown functions

// let ProductsLinkTrigger = document.querySelector(".productsDropMenuTrigger");

// let ProdMenu = document.querySelector(".prodMenu");

// ProductsLinkTrigger.addEventListener("mouseover", function() {
//     ProdMenu.style.display = "flex";
// });

// ProductsLinkTrigger.addEventListener("mouseleave", function() {
//   ProdMenu.style.display = "none";
// });

// ProdMenu.addEventListener("mouseover", function() {
//   ProdMenu.style.display = "flex";
// });

// ProdMenu.addEventListener("mouseleave", function() {
//   ProdMenu.style.display = "none";
// });

export default function MyNav() {
  return (
    <NavContainer>
      <DesktopNav>
        <HomeLink href="#">Home</HomeLink>
        <ProductsLink href="#" className="productsDropMenuTrigger">
          Products{" "}
          <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} />
        </ProductsLink>
        <ProductsDropDownContainer className="prodMenu">
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

const MobileNav = styled.nav`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
