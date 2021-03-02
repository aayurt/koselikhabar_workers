import { Grid, Paper } from "@material-ui/core";
import React from "react";
import CarouselSlide from "./CarouselSlide";

const TopBanner = () => {
  return (
    <>
      <Grid
        container
        className="material--flexGrow material--background-color-white"
      >
        <Grid
          key={1}
          md={9}
          xs={12}
          item
          className="flex align-center flex justify-center"
          style={{ paddingLeft: "1rem" }}
        >
          <Paper elevation={1} className="flex justify-center">
            <CarouselSlide />
          </Paper>
        </Grid>
        <Grid
          key={2}
          md={3}
          xs={12}
          item
          className="flex align-center flex justify-center"
        >
          <Grid className="material--padding-1rem flex justify-center">
            <Grid direction="column" container>
              <Grid item key={1}>
                <img
                  src="https://picsum.photos/400/250"
                  width="100%"
                  alt="carousel"
                />
              </Grid>
              <Grid item key={2}>
                <img
                  src="https://picsum.photos/400/250"
                  width="100%"
                  alt="carousel"
                />
              </Grid>
              <Grid item key={3}>
                <img
                  src="https://picsum.photos/400/250"
                  width="100%"
                  alt="carousel"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default TopBanner;
