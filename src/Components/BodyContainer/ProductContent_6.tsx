import { Grid } from "@material-ui/core";
import React from "react";
const ProductContent_6 = () => {
  return (
    <>
      <Grid container className="material--marginTop-1rem " spacing={2}>
        <Grid item key={1} md={2} className=" flex justify-center">
          <Grid
            container
            direction="column"
            className="material--background-color-grey"
          >
            <Grid item className="flex justify-center">
              <img src="https://picsum.photos/125/125" alt="carousel" />
            </Grid>
            <Grid item className="flex justify-center ">
              1
            </Grid>
          </Grid>
        </Grid>
        <Grid item key={2} md={2} className="flex justify-center">
          <Grid
            container
            direction="column"
            className="material--background-color-grey"
          >
            <Grid item className="flex justify-center">
              <img src="https://picsum.photos/125/125" alt="carousel" />
            </Grid>
            <Grid item className="flex justify-center">
              2
            </Grid>
          </Grid>
        </Grid>
        <Grid item key={3} md={2} className="flex justify-center">
          <Grid
            container
            direction="column"
            className="material--background-color-grey"
          >
            <Grid item className="flex justify-center">
              <img src="https://picsum.photos/125/125" alt="carousel" />
            </Grid>
            <Grid item className="flex justify-center">
              3
            </Grid>
          </Grid>
        </Grid>
        <Grid item key={4} md={2} className="flex justify-center">
          <Grid
            container
            direction="column"
            className="material--background-color-grey"
          >
            <Grid item className="flex justify-center">
              <img src="https://picsum.photos/125/125" alt="carousel" />
            </Grid>
            <Grid item className="flex justify-center">
              4
            </Grid>
          </Grid>
        </Grid>
        <Grid item key={5} md={2} className="flex justify-center">
          <Grid
            container
            direction="column"
            className="material--background-color-grey"
          >
            <Grid item className="flex justify-center">
              <img src="https://picsum.photos/125/125" alt="carousel" />
            </Grid>
            <Grid item className="flex justify-center">
              5
            </Grid>
          </Grid>
        </Grid>
        <Grid item key={6} md={2} className="flex justify-center">
          <Grid
            container
            direction="column"
            className="material--background-color-grey"
          >
            <Grid item className="flex justify-center">
              <img src="https://picsum.photos/125/125" alt="carousel" />
            </Grid>
            <Grid item className="flex justify-center">
              6
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default ProductContent_6;
