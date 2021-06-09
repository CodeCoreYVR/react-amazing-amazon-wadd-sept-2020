import "./App.css";
import ProductsIndexPage from "./components/ProductsIndexPage";
import ProductShowPage from "./components/ProductShowPage";
import NavBar from "./components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductNewPage from "./components/ProductNewPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/products" component={ProductsIndexPage} />
          <NavBar /> <Route path="/products/new" component={ProductNewPage} />
          <Route path="/products/:id" component={ProductShowPage} />
        </Switch>
      </BrowserRouter></div>
  );
}

export default App;
