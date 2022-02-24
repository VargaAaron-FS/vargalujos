import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import { FaChevronDown } from "react-icons/fa";

export default function MyNav() {
  // Dropdown menu hovers

  // Products dropdown hover
  function ProductsHoverOn() {
    document.querySelector(ProductsDropDownContainer).style.display = "flex";
  }
  function ProductsHoverOff() {
    document.querySelector(ProductsDropDownContainer).style.display = "none";
  }

  // Recipes dropdown hover
  function RecipesHoverOn() {
    document.querySelector(RecipesDropDownContainer).style.display = "flex";
  }
  function RecipesHoverOff() {
    document.querySelector(RecipesDropDownContainer).style.display = "none";
  }

  // Accessories dropdown hover
  function AccessoriesHoverOn() {
    document.querySelector(AccessoriesDropDownContainer).style.display = "flex";
  }
  function AccessoriesHoverOff() {
    document.querySelector(AccessoriesDropDownContainer).style.display = "none";
  }
  return (
    <NavContainer>
      <DesktopNav>
        <HomeLink href="#">Home</HomeLink>
        <ProductsLink href="#" onMouseEnter={ProductsHoverOn} onMouseLeave={ProductsHoverOff}>
          Products{" "}
          <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} />
        </ProductsLink>
        <ProductsDropDownContainer onMouseEnter={ProductsHoverOn} onMouseLeave={ProductsHoverOff}>
            <Link href="#">Cigars</Link>
            <Link href="#">Wines</Link>
            <Link href="#">Coffee</Link>
            <Link href="#">Recipes</Link>
            <Link href="#">Accessories</Link>
            <Link href="#">Pairing Sets</Link>
          </ProductsDropDownContainer>
        <RecipesLink href="#" onMouseEnter={RecipesHoverOn} onMouseLeave={RecipesHoverOff}>
          Recipes{" "}
          <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} />
        </RecipesLink>
        <RecipesDropDownContainer onMouseEnter={RecipesHoverOn} onMouseLeave={RecipesHoverOff}>
            <Link href="#">Breakfast</Link>
            <Link href="#">Lunch</Link>
            <Link href="#">Dinner</Link>
            <Link href="#">Dessert</Link>
            <Link href="#">Snack</Link>
          </RecipesDropDownContainer>
        <AccessoriesLink href="#" onMouseEnter={AccessoriesHoverOn} onMouseLeave={AccessoriesHoverOff}>
          Accessories{" "}
          <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} />
        </AccessoriesLink>
        <AccessoriesDropDownContainer onMouseEnter={AccessoriesHoverOn} onMouseLeave={AccessoriesHoverOff}>
            <Link href="#">Cigar Cutters</Link>
            <Link href="#">Cigar Ashtrays</Link>
            <Link href="#">Cigar Lighters</Link>
            <Link href="#">Cigar Humidors</Link>
            <Link href="#">Wine Glasses</Link>
            <Link href="#">Wine Decanters</Link>
            <Link href="#">Wine Corkscrews & Openers</Link>
            <Link href="#">Coffee Makers</Link>
            <Link href="#">Coffee Mugs</Link>
            <Link href="#">Cookware</Link>
          </AccessoriesDropDownContainer>
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

const RecipesDropDownContainer = styled.div`
  flex-direction: column;
  row-gap: 1rem;
  position: absolute;
  top: 0rem;
  left: 13.62rem;
  padding: 3rem 1rem 1rem 1rem;
  z-index: 1;
  background: #e7e7e7;
  min-width: 82px;
  border-radius: 0 0 .25rem .25rem;
  display: none;
`;

const AccessoriesDropDownContainer = styled.div`
  flex-direction: column;
  row-gap: 1rem;
  position: absolute;
  top: 0rem;
  left: 21.82rem;
  padding: 3rem 1rem 1rem 1rem;
  z-index: 1;
  background: #e7e7e7;
  min-width: 113px;
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
