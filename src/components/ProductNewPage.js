import React, { Component } from "react";
import ProductForm from "./ProductForm";
import { Product } from "../requests";
class ProductNewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProductData: {
        title: "",
        description: "",
        price: "",
      },
    };
    this.createProduct = this.createProduct.bind(this);
    this.updateProductData = this.updateProductData.bind(this);
  }
  createProduct(params) {
    Product.create(this.state.newProductData).then(({ id }) => {
      this.props.history.push(`/products/${id}`);
    });
  }

  updateProductData(props) {
    // props will be an object {title: 'new value title'} | {body: 'new value body'}
    this.setState((state) => {
      console.log(props);
      console.log(state);
      if (state.newProductData.title.length > 30) {
        alert("Title is too long");
      }
      return {
        newProductData: {
          ...state.newProductData,
          ...props,
        },
      };
    });
  }
  render() {
    return (
      <main>
        <ProductForm
          createProduct={this.createProduct}
          newProductData={this.state.newProductData}
          updateProductData={this.updateProductData}
        />
      </main>
    );
  }
}

export default ProductNewPage;
