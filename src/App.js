import './App.css';
import ProductsIndexPage from './components/ProductsIndexPage'
import ProductShowPage from './components/ProductShowPage'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/products" exact component={ProductsIndexPage} />
        <Route path="/products/:id" component={ProductShowPage} />
      </div>
    </Router>
  );
}

export default App;
