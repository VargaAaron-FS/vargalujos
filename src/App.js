import React from 'react';
import styled from 'styled-components';

// Components
import MyHeader from "./components/MyHeader";
import MyNav from './components/MyNav';
import SearchBar from './components/SearchBar';
import CategoryCard from "./components/CategoryCard";

// Photos
import CigarPhoto from "./images/cigar-photo.jpg";
import WinesPhoto from "./images/wines-photo.jpg";
import CoffeePhoto from "./images/coffee-photo.jpg";
import RecipesPhoto from "./images/recipes-photo.jpg";

// Pages
// Pages go here!

// Routing
// import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <AppContainer>
      <MyHeader />
      <MyNav />
      <SearchBar />
      <Grid>
        {/* TODO: Make these grids 1:1 ratio */}
        <CategoryCard categoryTitle="Cigars" bgImgUrl={CigarPhoto} />
        <CategoryCard categoryTitle="Wines" bgImgUrl={WinesPhoto} />
        <CategoryCard categoryTitle="Coffee" bgImgUrl={CoffeePhoto} />
        <CategoryCard categoryTitle="Recipes" bgImgUrl={RecipesPhoto} />
      </Grid>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-x: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
  margin-top: 1rem;
`;
