import React, { Component } from 'react'
import ProductDetails  from './ProductDetails'
import {Product} from '../requests'
import ReviewList  from './ReviewList'

class ProductShowPage extends Component  {
  constructor(props){
super(props)
this.state={product:{}}
this.deleteReview=this.deleteReview.bind(this)
  }


  componentDidMount(){
    Product.show(this.props.match.params.id)
    .then(product=>{
      this.setState((state)=>{
        return{
          product: product
        }
      })
    })
  }
  deleteReview(id){
    this.setState((state)=>{
      return {
        reviews: state.reviews.filter(r=>r.id !==id)
      }
    })
  }
  render(){
  const { title, description, created_at, seller, price, reviews } = this.state.product;
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
      reviews={reviews}
      deleteReview={this.deleteReview} />
    </main>
  )
}}
export default ProductShowPage