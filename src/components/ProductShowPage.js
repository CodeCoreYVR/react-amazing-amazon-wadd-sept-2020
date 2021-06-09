import React, { Component } from 'react'
import ProductDetails  from './ProductDetails'
import {Product} from '../requests'
import ReviewList  from './ReviewList'

class ProductShowPage extends Component  {
  constructor(props){
super(props)
this.state = {
  loading: true,
  product: {}
};
this.deleteReview = this.deleteReview.bind(this);
  }



  async componentDidMount() {
    const { params } = this.props.match;
    const product = await Product.show(params.id);
    this.setState({ product, loading: false });
  }
  deleteReview(id){
    this.setState((state)=>{
      return {
        reviews: state.reviews.filter(r=>r.id !==id)
      }
    })
  }
  render(){
    const { product, loading } = this.state;
    if (loading) {
      return (
        <main style={{ padding: '0  20px' }}>
          <h3>Loading product...</h3>
        </main>
      );
    }
    const { reviews = [] } = product;

  return (
    <main>
      <ProductDetails
 {...product}
      />
      <ReviewList 
      reviews={reviews}
      deleteReview={this.deleteReview} />
    </main>
  )
}}
export default ProductShowPage