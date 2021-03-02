import { Grid } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
const ProductContent = () => {
  const history = useHistory();
  const handleClickRoute = (id:any) => {
    history.push(`/product/${id}`);
  };
  return (
    <>
      <Grid container spacing={1} className="material--marginTop-1rem ">
        <Grid
          item
          key={1}
          xs={12}
          sm={6}
          md={3}
          className="flex justify-center"
        >
          <Grid
            container
            direction="column"
            className="material--background-color-grey cursorPointer"
            onClick={() => handleClickRoute(1)}
          >
            <Grid item className="flex justify-center">
              <img src="https://picsum.photos/125/125" alt="carousel" />
            </Grid>
            <Grid item className="flex justify-center ">
              1
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          key={2}
          xs={12}
          sm={6}
          md={3}
          className="flex justify-center"
        >
          <Grid
            container
            direction="column"
            className="material--background-color-grey "
            onClick={() => handleClickRoute(1)}
          >
            <Grid item className="flex justify-center">
              <img src="https://picsum.photos/125/125" alt="carousel" />
            </Grid>
            <Grid item className="flex justify-center">
              2
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          key={3}
          xs={12}
          sm={6}
          md={3}
          className="flex justify-center"
        >
          <Grid
            container
            direction="column"
            className="material--background-color-grey "
            onClick={() => handleClickRoute(1)}
          >
            <Grid item className="flex justify-center">
              <img src="https://picsum.photos/125/125" alt="carousel" />
            </Grid>
            <Grid item className="flex justify-center">
              3
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          key={4}
          xs={12}
          sm={6}
          md={3}
          className="flex justify-center"
        >
          <Grid
            container
            direction="column"
            className="material--background-color-grey "
            onClick={() => handleClickRoute(1)}
          >
            <Grid item className="flex justify-center">
              <img src="https://picsum.photos/125/125" alt="carousel" />
            </Grid>
            <Grid item className="flex justify-center">
              4
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default ProductContent;
