import React, { Component } from "react";
import products from '../data/productsIndexData'
class ProductsIndexPage extends Component {

  render() {
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
