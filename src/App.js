import React from "react";
import styled from "styled-components";

// Components
import MyHeader from "./components/MyHeader";
import MyNav from "./components/MyNav";
import SearchBar from "./components/SearchBar";
import FooterNav from "./components/FooterNav";
import MyFooter from "./components/MyFooter";
import Announcement from "./components/Announcement";

// Routing
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// Pages
import Home from "./pages/Home";
import Cigars from "./pages/Cigars";
import Products from "./pages/Products";
import Recipes from "./pages/Recipes";
import Accessories from "./pages/Accessories";
import History from "./pages/History";
import Blog from "./pages/Blog";
import Account from "./pages/Account";
import ShoppingCart from "./pages/ShoppingCart";
import Alcohol from "./pages/Alcohol";
import Coffee from "./pages/Coffee";
import Tea from "./pages/Tea";
import PairingAssistant from "./pages/PairingAssistant";
import CigarProduct from './pages/CigarProduct';
import AlcoholProduct from './pages/AlcoholProduct';

export default function App() {
  return (
    <AppContainer>
      <MyHeader />
      <MyNav />
      <SearchBar />
      <Announcement
        announcementCopy="Get help pairing products that go amazing together with our very own "
        linkHighlight="Pairing&nbsp;Assistant"
      />
      <Main>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cigars" element={<Cigars />} />
            <Route path="alcohol" element={<Alcohol />} />
            <Route path="coffee" element={<Coffee />} />
            <Route path="tea" element={<Tea />} />
            <Route path="products" element={<Products />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="accessories" element={<Accessories />} />
            <Route path="history" element={<History />} />
            <Route path="blog" element={<Blog />} />
            <Route path="account" element={<Account />} />
            <Route path="shopping-cart" element={<ShoppingCart />} />
            <Route path="pairing-assistant" element={<PairingAssistant />} />
            <Route path="cigar-product" element={<CigarProduct />} />
            <Route path="alcohol-product" element={<AlcoholProduct />} />
          </Routes>
        </ScrollToTop>
      </Main>
      <FooterNav />
      <MyFooter />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-x: hidden;
`;

const Main = styled.main``;
