import "./App.css";
import React, { Component } from "react";

import ProductsIndexPage from "./components/ProductsIndexPage";
import ProductShowPage from "./components/ProductShowPage";
import NavBar from "./components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductNewPage from "./components/ProductNewPage";
import { Session } from "./requests";
import { User } from "./requests";

import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }


  componentDidMount() {
    Session.currentUser().then((user) => {
      console.log("user", user);
      this.setState((state) => {
        return { user: user };
      });
    });
  }
  handleSubmit(params) {
    Session.create(params)
      .then(() => {
        return Session.currentUser();
      })
      .then((user) => {
        console.log("user", user);
        this.setState((state) => {
          return { user: user };
        });
      });
  }
  destroySession() {
    Session.destroy().then((res) => {
      this.setState((state) => {
        return { user: null };
      });
    });
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <NavBar
            currentUser={this.state.user}
            destroySession={this.destroySession}
          />          <Switch>
            <Route path="/products/new" component={ProductNewPage} />
            <Route exact path="/products" component={ProductsIndexPage} />
            <Route
              path="/sign_in"
              render={(routeProps) => (
                <SignInPage handleSubmit={this.handleSubmit} {...routeProps} />
              )}
            />
              <Route
              path="/sign_up"
              render={(routeProps) => (
                <SignUpPage handleSubmit={this.handleSubmit} {...routeProps} />
              )}
            />
            <Route path="/products/:id" component={ProductShowPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
