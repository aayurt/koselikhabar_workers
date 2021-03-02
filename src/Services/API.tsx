import { gql } from "@apollo/client";

const API = {
  QUERY: {
    CATEGORIES: gql`
      query MyQuery {
        categories(first: 100) {
          nodes {
            categoryId
            count
            description
            name
            uri
            slug
            parent {
              node {
                categoryId
                name
              }
            }
          }
        }
      }
    `,
  },
};
export { API };
