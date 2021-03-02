import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { Fade } from "@material-ui/core";
import { shallowEqual, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import CompanyProfile from "./Components/Company/CompanyProfile";
import LandingPage from "./Components/LandingPage/landingPage";
import SingleProductView from "./Components/ProductView/SingleProductView";
import LoginLayout from "./Layouts/LoginLayout";
import MasterLayout from "./Layouts/MasterLayout";
import NoRoute from "./Layouts/NoRoute";
import PrivateRoute from "./Router/PrivateRoute";
import PublicRoute from "./Router/PublicRoute";
import { setContext } from "@apollo/client/link/context";

function App() {
  // const { jsession } = useSelector(
  //   (state) => ({
  //     jsession: state.auth.jsession,
  //   }),
  //   shallowEqual
  // );

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists

    return {
      headers: {
        ...headers,
        authorization: sessionStorage.getItem("JSESSIONID"),
      },
    };
  });
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(
      createHttpLink({
        uri: "http://localhost/koselikhabar/index.php?graphql",
        headers: {
          "Content-Type": "application/json",
        },
        fetchOptions: {
          mode: "cors",
        },
        useGETForQueries: false,
      })
    ),
  });
  return (
    // history={history}
    <ApolloProvider client={client}>
      <Router>
        <Fade>
          <Switch>
            {/*
             *if jsession present then it redirects to /requests else login page
             */}
            <PublicRoute
              exact
              path="/"
              component={LandingPage}
              layout={MasterLayout}
            />
            <PublicRoute
              exact
              path="/product/:id"
              component={SingleProductView}
              layout={MasterLayout}
            />
            <PublicRoute
              exact
              path="/company/:id"
              component={CompanyProfile}
              layout={MasterLayout}
            />
            <PublicRoute
              exact
              path="/login"
              component={NoRoute}
              layout={LoginLayout}
            />

            <PublicRoute component={NoRoute} layout={LoginLayout} />
          </Switch>
        </Fade>
      </Router>
    </ApolloProvider>
  );
}

export default App;
