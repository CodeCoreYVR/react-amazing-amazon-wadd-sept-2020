import React, { Component } from 'react'
import ProductDetails  from './ProductDetails'
import ReviewList  from './ReviewList'
import product from '../data/product'
class ProductShowPage extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      product
    };
  }



  render(){
    const { product } = this.state;
    const { reviews = [] } = product;
  // const { title, description, created_at, seller, price, reviews } = product;
  return (
    <main>
             <ProductDetails {...product} />

             <ReviewList reviews={reviews} />

    </main>
  )
}}
export default ProductShowPage