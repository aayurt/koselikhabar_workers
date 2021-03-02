import { Grid, Paper } from "@material-ui/core";
import React from "react";
import ProductContent from "./ProductContent_6";
const JustForYou = () => {
  return (
    <>
      <Grid container className="material--marginTop-2rem " spacing={2}>
        <Grid item key={1} md={12}>
          <Paper className="material--padding-1rem ">
            <span className="category_topic">JUST FOR YOU</span>
            <ProductContent />
            <ProductContent />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default JustForYou;
