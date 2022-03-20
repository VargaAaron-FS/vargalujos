import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import CategoryCard from "../components/CategoryCard";
import CategoryCardLong from "../components/CategoryCardLong";
import SectionTitle from "../components/SectionTitle";
import FeaturedProductsGrid from "../components/FeaturedProductsGrid";
import PrimaryButton from "../components/buttons/PrimaryButton";

// Photos
import CigarPhoto from "../images/cigar-photo.jpg";
import WinesPhoto from "../images/wines-photo.jpg";
import CoffeePhoto from "../images/coffee-photo.jpg";
import RecipesPhoto from "../images/recipes-photo.jpg";
import AccessoriesPhoto from "../images/accessories-photo.jpg";
import CigarItemSamplePhoto from "../images/cigar-item-sample.png";
import WineItemSamplePhoto from "../images/wine-item-sample.jpg";
import CoffeeItemSamplePhoto from "../images/coffee-item-sample.jpg";
import RecipesItemSamplePhoto from "../images/recipes-item-sample.jpg";
import AccessoriesItemSamplePhoto from "../images/accessories-item-sample.jpg";
import TeaPhoto from "../images/tea-photo.jpg";
import TeaItemSamplePhoto from "../images/tea-item-sample.png";

export default function Home() {
  return (
    <AppContainer>
      <Grid>
        <GridLink to="/cigars">
          <CategoryCard categoryTitle="Cigars" bgImgUrl={CigarPhoto} />
        </GridLink>
        <GridLink to="/alcohol">
          <CategoryCard categoryTitle="Alcohol" bgImgUrl={WinesPhoto} />
        </GridLink>
        <GridLink to="/coffee">
          <CategoryCard categoryTitle="Coffee" bgImgUrl={CoffeePhoto} />
        </GridLink>
        <GridLink to="/tea">
          <CategoryCard categoryTitle="Tea" bgImgUrl={TeaPhoto} />
        </GridLink>
      </Grid>
      <Grid2>
        <GridLink to="/recipes">
          <CategoryCardLong categoryTitle="Recipes" bgImgUrl={RecipesPhoto} />
        </GridLink>
        <GridLink to="/accessories">
          <CategoryCardLong
            categoryTitle="Accessories"
            bgImgUrl={AccessoriesPhoto}
          />
        </GridLink>
      </Grid2>
      <SectionTitle sectionTitle="Featured Cigars" />
      <FeaturedProductsGrid
        productOneTitle="Product Title"
        productTwoTitle="Product Title"
        productThreeTitle="Product Title"
        productFourTitle="Product Title"
        prodOnePrice="$10.00"
        prodTwoPrice="$20.00"
        prodThreePrice="$30.00"
        prodFourPrice="$40.00"
        itemOneImgUrl={CigarItemSamplePhoto}
        itemTwoImgUrl={CigarItemSamplePhoto}
        itemThreeImgUrl={CigarItemSamplePhoto}
        itemFourImgUrl={CigarItemSamplePhoto}
      />
      <PrimaryButton buttonTitle="Shop All" />
      <SectionTitle sectionTitle="Featured Alcohol" />
      <FeaturedProductsGrid
        productOneTitle="Product Title"
        productTwoTitle="Product Title"
        productThreeTitle="Product Title"
        productFourTitle="Product Title"
        prodOnePrice="$10.00"
        prodTwoPrice="$20.00"
        prodThreePrice="$30.00"
        prodFourPrice="$40.00"
        itemOneImgUrl={WineItemSamplePhoto}
        itemTwoImgUrl={WineItemSamplePhoto}
        itemThreeImgUrl={WineItemSamplePhoto}
        itemFourImgUrl={WineItemSamplePhoto}
      />
      <PrimaryButton buttonTitle="Shop All" />
      <SectionTitle sectionTitle="Featured Coffee" />
      <FeaturedProductsGrid
        productOneTitle="Product Title"
        productTwoTitle="Product Title"
        productThreeTitle="Product Title"
        productFourTitle="Product Title"
        prodOnePrice="$10.00"
        prodTwoPrice="$20.00"
        prodThreePrice="$30.00"
        prodFourPrice="$40.00"
        itemOneImgUrl={CoffeeItemSamplePhoto}
        itemTwoImgUrl={CoffeeItemSamplePhoto}
        itemThreeImgUrl={CoffeeItemSamplePhoto}
        itemFourImgUrl={CoffeeItemSamplePhoto}
      />
      <PrimaryButton buttonTitle="Shop All" />
      <SectionTitle sectionTitle="Featured Tea" />
      <FeaturedProductsGrid
        productOneTitle="Product Title"
        productTwoTitle="Product Title"
        productThreeTitle="Product Title"
        productFourTitle="Product Title"
        prodOnePrice="$10.00"
        prodTwoPrice="$20.00"
        prodThreePrice="$30.00"
        prodFourPrice="$40.00"
        itemOneImgUrl={TeaItemSamplePhoto}
        itemTwoImgUrl={TeaItemSamplePhoto}
        itemThreeImgUrl={TeaItemSamplePhoto}
        itemFourImgUrl={TeaItemSamplePhoto}
      />
      <PrimaryButton buttonTitle="Shop All" />
      <SectionTitle sectionTitle="Featured Recipes" />
      <FeaturedProductsGrid
        productOneTitle="Product Title"
        productTwoTitle="Product Title"
        productThreeTitle="Product Title"
        productFourTitle="Product Title"
        prodOnePrice="$10.00"
        prodTwoPrice="$20.00"
        prodThreePrice="$30.00"
        prodFourPrice="$40.00"
        itemOneImgUrl={RecipesItemSamplePhoto}
        itemTwoImgUrl={RecipesItemSamplePhoto}
        itemThreeImgUrl={RecipesItemSamplePhoto}
        itemFourImgUrl={RecipesItemSamplePhoto}
      />
      <PrimaryButton buttonTitle="Shop All" />
      <SectionTitle sectionTitle="Featured Accessories" />
      <FeaturedProductsGrid
        productOneTitle="Product Title"
        productTwoTitle="Product Title"
        productThreeTitle="Product Title"
        productFourTitle="Product Title"
        prodOnePrice="$10.00"
        prodTwoPrice="$20.00"
        prodThreePrice="$30.00"
        prodFourPrice="$40.00"
        itemOneImgUrl={AccessoriesItemSamplePhoto}
        itemTwoImgUrl={AccessoriesItemSamplePhoto}
        itemThreeImgUrl={AccessoriesItemSamplePhoto}
        itemFourImgUrl={AccessoriesItemSamplePhoto}
      />
      <PrimaryButton buttonTitle="Shop All" />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
  margin-top: 1rem;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const GridLink = styled(Link)`
  text-decoration: none;
`;
