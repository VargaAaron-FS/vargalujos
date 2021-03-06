import React from "react";
import { Link } from "react-router-dom";
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
        <HomeAnchor to="/">Home</HomeAnchor>
        <ProductsAnchor
          to="/products"
          onMouseEnter={ProductsHoverOn}
          onMouseLeave={ProductsHoverOff}
        >
          Products{" "}
          <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} />
        </ProductsAnchor>
        <ProductsDropDownContainer
          onMouseEnter={ProductsHoverOn}
          onMouseLeave={ProductsHoverOff}
        >
          <DesktopLink to="/">Cigars</DesktopLink>
          <DesktopLink to="/">Alcohol</DesktopLink>
          <DesktopLink to="/">Coffee</DesktopLink>
          <DesktopLink to="/">Tea</DesktopLink>
          <DesktopLink to="/">Recipes</DesktopLink>
          <DesktopLink to="/">Accessories</DesktopLink>
          <DesktopLink to="/">Pairing Sets</DesktopLink>
        </ProductsDropDownContainer>
        <RecipesAnchor
          to="/recipes"
          onMouseEnter={RecipesHoverOn}
          onMouseLeave={RecipesHoverOff}
        >
          Recipes{" "}
          <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} />
        </RecipesAnchor>
        <RecipesDropDownContainer
          onMouseEnter={RecipesHoverOn}
          onMouseLeave={RecipesHoverOff}
        >
          <DesktopLink to="/">Breakfast</DesktopLink>
          <DesktopLink to="/">Lunch</DesktopLink>
          <DesktopLink to="/">Dinner</DesktopLink>
          <DesktopLink to="/">Dessert</DesktopLink>
          <DesktopLink to="/">Snack</DesktopLink>
        </RecipesDropDownContainer>
        <AccessoriesAnchor
          to="/accessories"
          onMouseEnter={AccessoriesHoverOn}
          onMouseLeave={AccessoriesHoverOff}
        >
          Accessories{" "}
          <FaChevronDown style={{ marginLeft: ".5rem", fontSize: ".75rem" }} />
        </AccessoriesAnchor>
        <AccessoriesDropDownContainer
          onMouseEnter={AccessoriesHoverOn}
          onMouseLeave={AccessoriesHoverOff}
        >
          <DesktopLink to="/">Cigar Cutters</DesktopLink>
          <DesktopLink to="/">Cigar Ashtrays</DesktopLink>
          <DesktopLink to="/">Cigar Lighters</DesktopLink>
          <DesktopLink to="/">Cigar Humidors</DesktopLink>
          <DesktopLink to="/">Wine Glasses</DesktopLink>
          <DesktopLink to="/">Wine Decanters</DesktopLink>
          <DesktopLink to="/">Wine Corkscrews & Openers</DesktopLink>
          <DesktopLink to="/">Coffee Makers</DesktopLink>
          <DesktopLink to="/">Coffee Mugs</DesktopLink>
          <DesktopLink to="/">Cookware</DesktopLink>
        </AccessoriesDropDownContainer>
        <HistoryAnchor to="/history">History</HistoryAnchor>
        <BlogAnchor to="/blog">Blog</BlogAnchor>
        <span>&mdash;</span>
        <UserAnchor to="/account">
          <FaUserAlt />
        </UserAnchor>
        <ShoppingCartAnchor to="/shopping-cart">
          <FaShoppingCart />
        </ShoppingCartAnchor>
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
        <UserAnchor
          to="/account"
          style={{ marginLeft: "auto", marginRight: "1rem" }}
        >
          <FaUserAlt />
        </UserAnchor>
        <ShoppingCartAnchor to="/shopping-cart">
          <FaShoppingCart />
        </ShoppingCartAnchor>
      </MobileNav>
      <MobileNavMenu>
        <CloseMenuAnchor onClick={MobileNavExit}>
          <FaTimes /> Close
        </CloseMenuAnchor>
        <LinksContainer>
          <MobileLink to="/" onClick={MobileNavExit}>Home</MobileLink>
          <MobileLink to="/products" onClick={MobileNavExit}>
            Products{" "}
            <FaChevronDown
              style={{ marginLeft: ".5rem", fontSize: ".75rem" }}
            />
          </MobileLink>
          <MobileLink to="/recipes" onClick={MobileNavExit}>
            Recipes{" "}
            <FaChevronDown
              style={{ marginLeft: ".5rem", fontSize: ".75rem" }}
            />
          </MobileLink>
          <MobileLink to="/accessories" onClick={MobileNavExit}>
            Accessories{" "}
            <FaChevronDown
              style={{ marginLeft: ".5rem", fontSize: ".75rem" }}
            />
          </MobileLink>
          <MobileLink to="/history" onClick={MobileNavExit}>History</MobileLink>
          <MobileLink to="/blog" onClick={MobileNavExit}>Blog</MobileLink>
        </LinksContainer>
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

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  row-gap: 2rem;
  align-items: flex-start;
`;

const DesktopLink = styled(Link)`
  display: flex;
  flex-direction: row;
  color: #151515;
  align-items: center;
  z-index: 10;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

const MobileLink = styled(Link)`
  display: flex;
  flex-direction: row;
  color: #151515;
  align-items: center;
  z-index: 10;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

const HomeAnchor = styled(Link)`
  display: flex;
  flex-direction: row;
  color: #151515;
  align-items: center;
  z-index: 10;
  text-decoration: underline;
  &:hover {
    color: #000;
    text-decoration: none;
  }
`;

const ProductsAnchor = styled(Link)`
  display: flex;
  flex-direction: row;
  color: #151515;
  align-items: center;
  z-index: 10;
  &:hover {
    text-decoration: none;
  }
`;

const RecipesAnchor = styled(Link)`
  display: flex;
  flex-direction: row;
  color: #151515;
  align-items: center;
  z-index: 10;
  &:hover {
    text-decoration: none;
  }
`;

const AccessoriesAnchor = styled(Link)`
  display: flex;
  flex-direction: row;
  color: #151515;
  align-items: center;
  z-index: 10;
  &:hover {
    text-decoration: none;
  }
`;

const HistoryAnchor = styled(Link)`
  display: flex;
  flex-direction: row;
  color: #151515;
  align-items: center;
  z-index: 10;
  &:hover {
    text-decoration: none;
  }
`;

const UserAnchor = styled(Link)`
  display: flex;
  flex-direction: row;
  color: #151515;
  align-items: center;
  z-index: 10;
  &:hover {
    text-decoration: none;
  }
`;

const BlogAnchor = styled(Link)`
  display: flex;
  flex-direction: row;
  color: #151515;
  align-items: center;
  z-index: 10;
  &:hover {
    text-decoration: none;
  }
`;

const ShoppingCartAnchor = styled(Link)`
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
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
  z-index: 20;
  top: 0;
  position: fixed;
  left: 0rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.25rem;
  row-gap: 2rem;
  @media (max-width: 640px) {
    border-radius: 0.25rem 0.25rem 47.33px 47.33px;
  }
`;

const CloseMenuAnchor = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 0.25rem;
  cursor: pointer;
  margin-left: auto;
`;
