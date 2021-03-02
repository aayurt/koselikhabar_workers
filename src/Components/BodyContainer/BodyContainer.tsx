import { Grid, Paper } from "@material-ui/core";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";
import JustForYou from "./JustForYou";
import ParallaxItem from "./ParralaxItem";
import ProductContent from "./ProductContent_4";
import ProductTopCategories from "./ProductTopCategories";

const BodyContainer = () => {
  return (
    <>
      <ParallaxItem>
        <Grid className="material--marginTop-1rem">
          <ProductTopCategories />
        </Grid>

        <Grid container className="material--marginTop-2rem " spacing={2}>
          <Grid item key={1} md={6}>
            <Paper className="material--padding-1rem ">
              <span className="category_topic">Latest</span>
              <ProductContent />
            </Paper>
          </Grid>
          <Grid item key={2} md={6}>
            <Paper className="material--padding-1rem">
              <span className="category_topic">Top Trending</span>
              <ProductContent />
            </Paper>
          </Grid>
        </Grid>
      </ParallaxItem>
      <ParallaxItem>
        <JustForYou />
      </ParallaxItem>
    </>
  );
};
export default BodyContainer;
