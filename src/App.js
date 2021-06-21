import React, { useState, useEffect } from "react";
import ProductsIndexPage from "./components/ProductsIndexPage";
import ProductShowPage from "./components/ProductShowPage";
import NavBar from "./components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductNewPage from "./components/ProductNewPage";
import { Session, User } from "./requests";
import AuthRoute from "./components/AuthRoute";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import "./App.css";
const App = () => {
  const [appState, setAppState] = useState({
    user: null,
  });

  const getCurrentUser = () => {
    User.current().then((data) => {
      console.log(data)
      if (typeof data.id !== "number"){
        setAppState({ ...appState, user: null });
      } else {
        setAppState({ ...appState, user: data });
      }
    });
  };
  const destroySession = () => {
    Session.destroy().then(setAppState({ ...appState, user: null}));
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar currentUser={appState.user} destroySession={destroySession} />
        <Switch>
          <AuthRoute
            path="/products/new"
            isAuthenticated={!!appState.user}
            component={ProductNewPage}
          />
          <Route exact path="/products" component={ProductsIndexPage} />
          <Route
            exact
            path="/sign_in"
            render={(routeProps) => (
              <SignInPage {...routeProps} onSignIn={getCurrentUser} />
            )}
          />
          <Route
            exact
            path="/sign_up"
            render={(routeProps) => (
              <SignUpPage {...routeProps} onSignUp={getCurrentUser} />
            )}
          />
          <Route path="/products/:id" component={ProductShowPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
