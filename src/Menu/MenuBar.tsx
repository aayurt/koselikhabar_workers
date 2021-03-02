import { useQuery } from "@apollo/client";
import {
  AppBar,
  Fab,
  Grid,
  makeStyles,
  Toolbar,
  useScrollTrigger,
  Zoom,
  Select,
} from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import React from "react";
import { NavLink } from "react-router-dom";
import { API } from "../Services/API";
import CustomizedMenu from "./CustomizedMenu";
const CATEGORIES = API.QUERY.CATEGORIES;

const MenuBar = (props: any) => {
  const { data, loading, error } = useQuery(CATEGORIES);

  const useStyles = makeStyles((theme) => ({
    root: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));
  function ScrollTop(props: any) {
    const { children, window } = props;
    const classes = useStyles();

    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event: any) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        "#back-to-top-anchor"
      );

      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

    return (
      <Zoom in={trigger} style={{ zIndex: 1 }}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }
  if (loading) return <>Loading</>;
  if (error) return <>ERROR</>;

  const CategoryList = data.categories.nodes;
  const catList = [];
  const subcatList: any = [];
  for (var i = 0; i < CategoryList.length; i++) {
    if (CategoryList[i].parent === null) {
      catList.push(CategoryList[i]);
    } else {
      subcatList.push(CategoryList[i]);
    }
  }
  return (
    <>
      <div id="back-to-top-anchor"></div>
      <AppBar
        style={{
          background: "linear-gradient(45deg,#3494E6 30%,#EC6EAD 90%)",
        }}
        position="sticky"
      >
        <Toolbar
          style={{
            minHeight: "48px",
          }}
        >
          <Grid
            container
            spacing={3}
            className="justifyContentCenter menuPadSet"
          >
            {catList?.map((ele, index) => {
              const subCategoryFilter = subcatList?.filter((element: any) => {
                const parent = element?.parent?.node?.categoryId;
                if (parent === ele?.categoryId) return element;
              });
              return (
                <Grid key={`category-${index}`} item>
                  <CustomizedMenu
                    title={ele?.name}
                    catId={ele?.categoryId}
                    subCategoryFilter={subCategoryFilter}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Toolbar>
      </AppBar>
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};
export default MenuBar;
