import { Grid } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
const ProductTopCategories = () => {
  const history = useHistory();
  const handleClickRoute = (id: number) => {
    history.push(`/product/${id}`);
  };
  return (
    <>
      <span className="category_topic">POPULAR CATEGORIES</span>
      <Grid
        container
        spacing={1}
        className="material--marginTop-1rem  flex align-center"
      >
        <Grid
          item
          key={1}
          xs={12}
          sm={6}
          md={2}
          className="flex justify-center "
        >
          <Grid
            container
            direction="column"
            className="material--background-color-grey cursorPointer"
            onClick={() => handleClickRoute(1)}
          >
            <Grid item className="flex justify-center category_title">
              <img
                src="https://picsum.photos/125/125"
                className="circle-animation"
                alt="carousel"
              />
            </Grid>
            <Grid item className="flex justify-center category_title">
              Apple
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          key={2}
          xs={12}
          sm={6}
          md={2}
          className="flex justify-center"
        >
          <Grid
            container
            direction="column"
            className="material--background-color-grey  cursorPointer"
            onClick={() => handleClickRoute(1)}
          >
            <Grid item className="flex justify-center category_title">
              <img
                src="https://picsum.photos/125/125"
                className="circle-animation"
                alt="carousel"
              />
            </Grid>
            <Grid item className="flex justify-center category_title">
              Samsung
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          key={3}
          xs={12}
          sm={6}
          md={2}
          className="flex justify-center"
        >
          <Grid
            container
            direction="column"
            className="material--background-color-grey  cursorPointer"
            onClick={() => handleClickRoute(1)}
          >
            <Grid item className="flex justify-center category_title">
              <img
                src="https://picsum.photos/125/125"
                className="circle-animation"
                alt="carousel"
              />
            </Grid>
            <Grid item className="flex justify-center category_title">
              Sony
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          key={4}
          xs={12}
          sm={6}
          md={2}
          className="flex justify-center"
        >
          <Grid
            container
            direction="column"
            className="material--background-color-grey  cursorPointer"
            onClick={() => handleClickRoute(1)}
          >
            <Grid item className="flex justify-center category_title">
              <img
                src="https://picsum.photos/125/125"
                className="circle-animation"
                alt="carousel"
              />
            </Grid>
            <Grid item className="flex justify-center category_title">
              Xiaomi
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          key={5}
          xs={12}
          sm={6}
          md={2}
          className="flex justify-center"
        >
          <Grid
            container
            direction="column"
            className="material--background-color-grey  cursorPointer"
            onClick={() => handleClickRoute(1)}
          >
            <Grid item className="flex justify-center category_title">
              <img
                src="https://picsum.photos/125/125"
                className="circle-animation"
                alt="carousel"
              />
            </Grid>
            <Grid item className="flex justify-center category_title">
              Nike
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          key={6}
          xs={12}
          sm={6}
          md={2}
          className="flex justify-center"
        >
          <Grid
            container
            direction="column"
            className="material--background-color-grey  cursorPointer"
            onClick={() => handleClickRoute(1)}
          >
            <Grid item className="flex justify-center category_title">
              <img
                src="https://picsum.photos/125/125"
                className="circle-animation"
                alt="carousel"
              />
            </Grid>
            <Grid item className="flex justify-center category_title">
              Huawei
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default ProductTopCategories;
