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
    this.deleteReview = this.deleteReview.bind(this);

  }


  deleteReview(reviewId) {
    return () => {
      const { product } = this.state;
      const { reviews } = product;

      this.setState({
        product: {
          ...product,
          reviews: reviews.filter(review => review.id !== reviewId)
        }
      });
    };
  }

  render(){
    const { product } = this.state;
    const { reviews = [] } = product;
  return (
    <main>
             <ProductDetails {...product} />
             <h3>Reviews</h3>

             <ReviewList reviews={reviews} onReviewDeleteClick={this.deleteReview} />

    </main>
  )
}}
export default ProductShowPage