import React, { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";
import { Product } from "../requests";
import ReviewList from "./ReviewList";
export const ProductShowContext = React.createContext(); 

const ProductShowPage = props => {
  const [productShow, setProductShow] = useState();

  // const deleteReview = (id) => {
  //   const newReviews = productShow.product.reviews.filter((r) => r.id !== id);
  //   setProductShow({ ...productShow, reviews: newReviews });
  // };
  const deleteReview = id => {
    setProductShow((state) => {
      const productCopy = JSON.parse(JSON.stringify(state));
      const newReviews = productCopy.reviews.filter((currentReview) => {
        return currentReview.id !== id;
      })
      productCopy.reviews = newReviews;
      return productCopy
    })
  };
  useEffect(() => {
    Product.show(props.match.params.id).then((product) => {
      setProductShow(product);
    });
  }, []);

  return (
    <main>
      <ProductDetails {...productShow} />
      
      <ProductShowContext.Provider value={deleteReview}>
        {productShow && productShow.id && productShow.reviews?.length> 0 ?
        <ReviewList
        reviews={productShow?.reviews}
        onReviewDeleteClick={id => deleteReview(id)}
        /> : " "
        }
        </ProductShowContext.Provider>
    </main>
  );
};
export default ProductShowPage;
