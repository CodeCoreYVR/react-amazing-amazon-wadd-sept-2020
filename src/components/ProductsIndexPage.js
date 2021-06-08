import React, { Component } from "react";
import products from '../data/products'
class ProductsIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products
    };
  }
  render() {
    const { products } = this.state;

    return (
      <main>
        {products.map(p => {
          return (
            <>
            <div key={p.id}>
              <h1>
                {p.id} - {p.title}
              </h1>
            </div>
            </>
          );
        })}
      </main>
    );
  }
}
export default ProductsIndexPage;
