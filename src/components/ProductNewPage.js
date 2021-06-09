import React, { Component } from 'react'
import ProductForm from './ProductForm';
import {Product} from '../requests';
class ProductNewPage extends Component {
  constructor(props) {
    super(props);
    this.createProduct=this.createProduct.bind(this);
  }
createProduct(params){
    Product.create(params)
    .then(({id})=>{
        this.props.history.push(`/products/${id}`)
    })
}

  render() {
    return(
      <main>
        <ProductForm createProduct={this.createProduct}/>
      </main>
    )
  }
}

export default ProductNewPage