import "./App.css";
import React, { Component } from "react";

import ProductsIndexPage from "./components/ProductsIndexPage";
import ProductShowPage from "./components/ProductShowPage";
import NavBar from "./components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductNewPage from "./components/ProductNewPage";
import { Session } from "./requests";
import { User } from "./requests";
import AuthRoute from "./components/AuthRoute";

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

  getCurrentUser = () => {
    return User.current().then(user => {
      if (user?.id) { 
        this.setState(state => {
          return { user }
        })
        console.log(user.id)
      }
    })
  }

  componentDidMount() {
    this.getCurrentUser()

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
  onSignOut = () => {
    this.setState({
      user: null
    })
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <NavBar currentUser={this.state.user} onSignOut={this.onSignOut}/>
        <Switch>
        <AuthRoute
              path="/products/new"
              isAuthenticated={this.state.user}
              component={ProductNewPage}
            />            <Route exact path="/products" component={ProductsIndexPage} />
            <Route exact path='/sign_in' render={(routeProps)=><SignInPage {...routeProps} onSignIn={this.getCurrentUser}/>} />

              <Route 
              exact
              path='/sign_up'
              render={(routeProps) => <SignUpPage {...routeProps} onSignUp={this.getCurrentUser} />}
            />
            <Route path="/products/:id" component={ProductShowPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
