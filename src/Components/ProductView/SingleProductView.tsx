import { Button, Grid } from "@material-ui/core";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import JustForYou from "../BodyContainer/JustForYou";
import Cart from "../../Assets/cart_icon.png";
import { motion } from "framer-motion";

const SingleProductView = () => {
  // const { id } = useParams();
  const history = useHistory();
  return (
    <>
      <span className="cart_icon">
        <div className="example-container">
          <motion.div
            drag
            dragConstraints={{
              top: 0,
              left: 0,
              right: 400,
              bottom: 0,
            }}
            animate={{
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              loop: Infinity,
              repeatDelay: 1,
            }}
          />
        </div>
        {/* <img src={Cart} alt="cart" width="45px" /> */}
      </span>
      <Grid
        container
        style={{
          backgroundColor: "#fff",
          padding: "1rem",
        }}
      >
        <Grid md={3} item className="flex justify-center">
          <img src="https://picsum.photos/200/200" alt="carousel" />
        </Grid>
        <Grid md={6} item>
          <Grid container direction="column">
            <Grid item>
              <span>
                Digicom Surge Protector 4 Extension Socket With 2 USB ports
                DG-V42U (Black)
              </span>
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
              <span
                style={{ fontWeight: "bold" }}
                className="cursorPointer"
                onClick={() => history.push("/company/1")}
              >
                Company: NEW
              </span>
            </Grid>
            <Grid item>
              <Button variant="outlined">Buy Now</Button>
              <Button variant="outlined">Add to Cart</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid md={3} item>
          Delivery options
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
      <JustForYou />
    </>
  );
};
export default SingleProductView;
