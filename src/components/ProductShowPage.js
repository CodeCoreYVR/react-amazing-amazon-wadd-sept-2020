import React, { Component } from 'react'
import ProductDetails  from './ProductDetails'
import ReviewList  from './ReviewList'
import product from '../data/product'
class ProductShowPage extends Component  {
  constructor(props){
super(props)

  }


  render(){
  const { title, description, created_at, seller, price, reviews } = product;
  return (
    <main>
      <ProductDetails
        title={title}
        description={description}
        fullName={seller?seller.full_name:''}
        price={price}
        created_at={new Date(created_at)}
      />
      <ReviewList 
      reviews={reviews} />
    </main>
  )
}}
export default ProductShowPage