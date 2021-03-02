import React from "react";
import MenuBar from "../../Menu/MenuBar";
import "../../SCSS/LandingPage.scss";
import BodyContainer from "../BodyContainer/BodyContainer";
import ParallaxItem from "../BodyContainer/ParralaxItem";
import Categories from "../Categories/Categories";
import FilterProducts from "../Filter/FilterProducts";
import TopBanner from "../TopBanner/TopBanner";

const LandingPage = () => {
  return (
    <>
      {/* <Container className="material--margin-1rem material--padding-1rem "> */}
      <MenuBar />
      {/* <Categories /> */}
      {/* <FilterProducts /> */}

      <ParallaxItem>
        <TopBanner />
      </ParallaxItem>
      <BodyContainer />
      {/* </Container> */}
    </>
  );
};
export default LandingPage;
