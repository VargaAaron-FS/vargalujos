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

// Pages
import Home from './pages/Home';
import Cigars from './pages/Cigars';
import Products from './pages/Products';
import Recipes from './pages/Recipes';

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
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cigars" element={<Cigars />} />
            <Route path="products" element={<Products />} />
            <Route path="recipes" element={<Recipes />} />
          </Routes>
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
