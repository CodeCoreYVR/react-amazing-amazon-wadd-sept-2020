import React, { Component } from "react";
import products from '../data/products'
class ProductsIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products
    };
    this.deleteProduct = this.deleteProduct.bind(this);

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
        {products.map(p => {
          return (
            <>
            <div key={p.id}>
              <h1>
                {p.id} - {p.title}
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
