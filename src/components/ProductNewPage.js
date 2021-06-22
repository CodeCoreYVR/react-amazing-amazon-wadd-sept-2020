import React, { Component } from "react";
import ProductForm from "./ProductForm";
import { Product } from "../requests";
class ProductNewPage extends Component {
  constructor(props) {
    super(props);
         this.state = { errors: []}
    ;
    this.createProduct = this.createProduct.bind(this);
  }
  createProduct(params) {
    Product.create(params).then((product) => {
      if(product.errors){
      this.setState({errors: product.errors}) } else {this.props.history.push(`/products/${product.id}`);
    }});
  }

  render() {
    return (
      <main>
        <ProductForm
          createProduct={this.createProduct}
          errors={this.state.errors}
        />
      </main>
    );
  }
}

export default ProductNewPage;
