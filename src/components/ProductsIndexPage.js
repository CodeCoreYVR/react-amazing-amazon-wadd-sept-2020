import React, { Component } from "react";
import products from '../data/products'
import ProductForm from "./ProductForm";
import { Link } from 'react-router-dom';

class ProductsIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,

      products
    };
    this.deleteProduct = this.deleteProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.maxProductId = this.maxProductId.bind(this);
  }

  maxProductId() {
    const { products } = this.state;
    return Math.max.apply(Math, products.map(product => product.id)) || 0;
  }

  addProduct(newProduct) {
    const { products } = this.state;
    newProduct.id = this.maxProductId() + 1;
    newProduct.user = {
      first_name: 'test',
      last_name: 'user'
    };
    this.setState({
      products: [newProduct].concat(products)
    });
  }
  deleteProduct(productId) {
    return () => {
      const { products } = this.state;
      this.setState({
        products: products.filter(product => product.id !== productId)
      });
    };
  }
  render() {
    const { products } = this.state;

    return (
      <main>
                <ProductForm onSubmit={this.addProduct} />

        {products.map(p => {
          return (
            <>
            <div key={p.id}>
              <h1>
                <Link to={`/products/${p.id}`}>{p.title}</Link>{' '}
              </h1>
              <button onClick={this.deleteProduct(p.id)}>Delete</button>

            </div>
            </>
          );
        })}
      </main>
    );
  }
}
export default ProductsIndexPage;
