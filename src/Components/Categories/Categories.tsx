import { useQuery } from "@apollo/client";
import React from "react";
import { API } from "../../Services/API";
const CATEGORIES = API.QUERY.CATEGORIES;
export default function Categories() {
  const { data, loading, error } = useQuery(CATEGORIES);
  if (loading) return <>Loading</>;
  if (error) return <>ERROR</>;

  const CategoryList = data.categories.nodes;
  console.log("Data", CategoryList);
  const catList = [];
  const subcatList = [];
  for (var i = 0; i < CategoryList.length; i++) {
    if (CategoryList[i].parent === null) {
      catList.push(CategoryList[i]);
    } else {
      subcatList.push(CategoryList[i]);
    }
  }
  return (
    <>
      <h1>Categories</h1>
      <br />
      {catList?.map((ele: any) => {
        return (
          <>
            {ele.name}
            <br />
          </>
        );
      })}
      <h1>SubCategories</h1>
      <br />
      {subcatList?.map((ele: any) => {
        return (
          <>
            {ele.name}
            <br />
          </>
        );
      })}
    </>
  );
}
