import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  FaChevronDown,
  FaBars,
  FaUserAlt,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";

export default function MyNav() {
  // Desktop dropdown menu hovers

  // - Products dropdown hover
  function ProductsHoverOn() {
    document.querySelector(ProductsDropDownContainer).style.display = "flex";
  }
  function ProductsHoverOff() {
    document.querySelector(ProductsDropDownContainer).style.display = "none";
  }

  // - Recipes dropdown hover
  function RecipesHoverOn() {
    document.querySelector(RecipesDropDownContainer).style.display = "flex";
  }
  function RecipesHoverOff() {
    document.querySelector(RecipesDropDownContainer).style.display = "none";
  }

  // - Accessories dropdown hover
  function AccessoriesHoverOn() {
    document.querySelector(AccessoriesDropDownContainer).style.display = "flex";
  }
  function AccessoriesHoverOff() {
    document.querySelector(AccessoriesDropDownContainer).style.display = "none";
  }

  // Mobile dropdown menu clicks/touches

  // - Menu/nav
  function MobileNavClick() {
    document.querySelector(MobileNavMenu).style.display = "flex";
    document.querySelector(".mobileMenuBgTint").style.display = "flex";
  }
  function MobileNavExit() {
    document.querySelector(MobileNavMenu).style.display = "none";
    document.querySelector(".mobileMenuBgTint").style.display = "none";
  }

  // - User/Account

  // - Shopping cart

  return (
    <NavContainer>
      <DesktopNav>
        <HomeLink href="#">Home</HomeLink>
        <ProductsLink
          href="#"
          onMouseEnter={ProductsHoverOn}
          onMouseLeave={ProductsHoverOff}
        >
          Products{" "}
          <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} />
        </ProductsLink>
        <ProductsDropDownContainer
          onMouseEnter={ProductsHoverOn}
          onMouseLeave={ProductsHoverOff}
        >
          <Link href="#">Cigars</Link>
          <Link href="#">Wines</Link>
          <Link href="#">Coffee</Link>
          <Link href="#">Recipes</Link>
          <Link href="#">Accessories</Link>
          <Link href="#">Pairing Sets</Link>
        </ProductsDropDownContainer>
        <RecipesLink
          href="#"
          onMouseEnter={RecipesHoverOn}
          onMouseLeave={RecipesHoverOff}
        >
          Recipes{" "}
          <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} />
        </RecipesLink>
        <RecipesDropDownContainer
          onMouseEnter={RecipesHoverOn}
          onMouseLeave={RecipesHoverOff}
        >
          <Link href="#">Breakfast</Link>
          <Link href="#">Lunch</Link>
          <Link href="#">Dinner</Link>
          <Link href="#">Dessert</Link>
          <Link href="#">Snack</Link>
        </RecipesDropDownContainer>
        <AccessoriesLink
          href="#"
          onMouseEnter={AccessoriesHoverOn}
          onMouseLeave={AccessoriesHoverOff}
        >
          Accessories{" "}
          <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} />
        </AccessoriesLink>
        <AccessoriesDropDownContainer
          onMouseEnter={AccessoriesHoverOn}
          onMouseLeave={AccessoriesHoverOff}
        >
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
        <span>&mdash;</span>
        <UserLink href="#">
          <FaUserAlt />
        </UserLink>
        <ShoppingCartLink href="#">
          <FaShoppingCart />
        </ShoppingCartLink>
      </DesktopNav>
      <MobileNav>
        <span
          style={{
            backgroundColor: "rgba(21,21,21,1)",
            display: "none",
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "5",
          }}
          className="mobileMenuBgTint"
        ></span>
        <MobileMenuButton onClick={MobileNavClick}>
          <FaBars />
          Menu
        </MobileMenuButton>
        <UserLink href="#" style={{ marginLeft: "auto", marginRight: "1rem" }}>
          <FaUserAlt />
        </UserLink>
        <ShoppingCartLink href="#">
          <FaShoppingCart />
        </ShoppingCartLink>
      </MobileNav>
      <MobileNavMenu>
        <CloseMenuLink onClick={MobileNavExit}>
          <FaTimes /> Close
        </CloseMenuLink>
      </MobileNavMenu>
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
  border-radius: 0 0 0.25rem 0.25rem;
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
  border-radius: 0 0 0.25rem 0.25rem;
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
  border-radius: 0 0 0.25rem 0.25rem;
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

const UserLink = styled.a`
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

const ShoppingCartLink = styled.a`
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
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  width: 100%;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  column-gap: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  background: transparent;
  text-decoration: underline;
  color: #151515;
  padding: 0;
  &:hover {
    text-decoration: none;
  }
`;

const MobileNavMenu = styled.div`
  display: none;
  flex-direction: column;
  background: #e7e7e7;
  width: calc(100vw - 4.9rem);
  height: calc(100vh - 3.9rem);
  z-index: 20;
  top: 0;
  position: fixed;
  left: 0rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.25rem;
  @media (max-width: 640px) {
    border-radius: 0.25rem 0.25rem 47.33px 47.33px;
  }
`;

const CloseMenuLink = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 0.25rem;
  cursor: pointer;
  margin-left: auto;
`;
