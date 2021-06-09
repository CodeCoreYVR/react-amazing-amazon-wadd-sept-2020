import "./App.css";
import ProductsIndexPage from "./components/ProductsIndexPage";
import ProductShowPage from "./components/ProductShowPage";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar /> <Route path="/products/:id" component={ProductShowPage} />
        <Route exact path="/products" component={ProductsIndexPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
