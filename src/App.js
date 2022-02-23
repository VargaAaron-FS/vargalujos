import React from "react";
import styled from "styled-components";

// Components
import MyHeader from "./components/MyHeader";
import MyNav from "./components/MyNav";
import SearchBar from "./components/SearchBar";
import CategoryCard from "./components/CategoryCard";
import CategoryCardLong from "./components/CategoryCardLong";
import SectionTitle from "./components/SectionTitle";
import FeaturedProductsGrid from "./components/FeaturedProductsGrid";
import PrimaryButton from "./components/buttons/PrimaryButton";

// Photos
import CigarPhoto from "./images/cigar-photo.jpg";
import WinesPhoto from "./images/wines-photo.jpg";
import CoffeePhoto from "./images/coffee-photo.jpg";
import RecipesPhoto from "./images/recipes-photo.jpg";
import AccessoriesPhoto from "./images/accessories-photo.jpg";
import CigarItemSamplePhoto from "./images/cigar-item-sample.png";

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
        {/* TODO: Make grid responsive and change to certain breakpoints */}
        <CategoryCard categoryTitle="Cigars" bgImgUrl={CigarPhoto} />
        <CategoryCard categoryTitle="Wines" bgImgUrl={WinesPhoto} />
        <CategoryCard categoryTitle="Coffee" bgImgUrl={CoffeePhoto} />
        <CategoryCard categoryTitle="Recipes" bgImgUrl={RecipesPhoto} />
      </Grid>
      <CategoryCardLong
        categoryTitle="Accessories"
        bgImgUrl={AccessoriesPhoto}
      />
      <SectionTitle sectionTitle="Featured Cigars" />
      <FeaturedProductsGrid
        productOneDescription="Product Description"
        productTwoDescription="Product Description"
        productThreeDescription="Product Description"
        prodOnePrice="$10.00"
        prodTwoPrice="$20.00"
        prodThreePrice="$30.00"
        itemOneImgUrl={CigarItemSamplePhoto}
        itemTwoImgUrl={CigarItemSamplePhoto}
        itemThreeImgUrl={CigarItemSamplePhoto}
      />
      <PrimaryButton buttonTitle="View All" />
      <SectionTitle sectionTitle="Featured Wines" />
      <FeaturedProductsGrid
        productOneDescription="Product Description"
        productTwoDescription="Product Description"
        productThreeDescription="Product Description"
        prodOnePrice="$10.00"
        prodTwoPrice="$20.00"
        prodThreePrice="$30.00"
        itemOneImgUrl={CigarItemSamplePhoto}
        itemTwoImgUrl={CigarItemSamplePhoto}
        itemThreeImgUrl={CigarItemSamplePhoto}
      />
      <PrimaryButton buttonTitle="View All" />
      <SectionTitle sectionTitle="Featured Coffee" />
      <FeaturedProductsGrid
        productOneDescription="Product Description"
        productTwoDescription="Product Description"
        productThreeDescription="Product Description"
        prodOnePrice="$10.00"
        prodTwoPrice="$20.00"
        prodThreePrice="$30.00"
        itemOneImgUrl={CigarItemSamplePhoto}
        itemTwoImgUrl={CigarItemSamplePhoto}
        itemThreeImgUrl={CigarItemSamplePhoto}
      />
      <PrimaryButton buttonTitle="View All" />
      <SectionTitle sectionTitle="Featured Recipes" />
      <FeaturedProductsGrid
        productOneDescription="Product Description"
        productTwoDescription="Product Description"
        productThreeDescription="Product Description"
        prodOnePrice="$10.00"
        prodTwoPrice="$20.00"
        prodThreePrice="$30.00"
        itemOneImgUrl={CigarItemSamplePhoto}
        itemTwoImgUrl={CigarItemSamplePhoto}
        itemThreeImgUrl={CigarItemSamplePhoto}
      />
      <PrimaryButton buttonTitle="View All" />
      <SectionTitle sectionTitle="Featured Accessories" />
      <FeaturedProductsGrid
        productOneDescription="Product Description"
        productTwoDescription="Product Description"
        productThreeDescription="Product Description"
        prodOnePrice="$10.00"
        prodTwoPrice="$20.00"
        prodThreePrice="$30.00"
        itemOneImgUrl={CigarItemSamplePhoto}
        itemTwoImgUrl={CigarItemSamplePhoto}
        itemThreeImgUrl={CigarItemSamplePhoto}
      />
      <PrimaryButton buttonTitle="View All" />
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
