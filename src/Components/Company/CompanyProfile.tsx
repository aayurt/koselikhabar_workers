import { Button, Grid } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
const CompanyProfile = () => {
  // const { id } = useParams();
  return (
    <>
      <Grid
        container
        style={{
          backgroundColor: "#fff",
          padding: "1rem",
        }}
      >
        <Grid md={2} item className="flex justify-center">
          <Grid container direction="column">
            <Grid item>
              <span>Company Overview</span>
            </Grid>
            <Grid item>
              <span>Selected Products</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid md={10} item>
          COMPANY PROFILE
          <Grid container>
            <Grid item md={5} justify="center">
              <img src="https://picsum.photos/350/200" alt="carousel" />
            </Grid>
            <Grid item md={7}>
              <Grid container direction="column">
                <Grid item>
                  <span>
                    AAA is the trustworthy Manufacturer and Exporter of all
                    kinds of, Sports Wears,Boxing Gears and Sports Goods, from
                    Sialkot,Pakistan.Customized clothing available.
                  </span>
                </Grid>
                <Grid item>
                  <span>Ratings</span>
                </Grid>
                <Grid item>
                  <span>Brand</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          backgroundColor: "#fff",
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        <Grid md={10} item>
          <Grid container direction="column">
            <Grid item>
              <span>Product Details</span>
            </Grid>
            <Grid item>
              <span>Ratings</span>
            </Grid>
            <Grid item>
              <span>Brand</span>
            </Grid>
            <Grid item>
              <span>Rs. </span>
            </Grid>
            <Grid item>
              <span>Quantity</span>
            </Grid>

            <Grid item>
              <Button variant="outlined">Buy Now</Button>
              <Button variant="outlined">Add to Cart</Button>
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Grid item>
              <span>Ratings And Reviews</span>
            </Grid>
            <Grid item>
              <span>Comments</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid md={2} item>
          From Same Store
        </Grid>
      </Grid>
    </>
  );
};
export default CompanyProfile;
