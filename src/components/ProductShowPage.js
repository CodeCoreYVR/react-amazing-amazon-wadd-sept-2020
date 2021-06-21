import React, { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";
import { Product } from "../requests";
import ReviewList from "./ReviewList";

const ProductShowPage = props => {
  const [productShow, setProductShow] = useState();

  const deleteReview = (id) => {
    const newReviews = productShow.product.reviews.filter((r) => r.id !== id);
    setProductShow({ ...productShow, reviews: newReviews });
  };
  useEffect(() => {
    Product.show(props.match.params.id).then((product) => {
      setProductShow(product);
    });
  }, []);

  return (
    <main>
      <ProductDetails {...productShow} />
      <ReviewList
        reviews={productShow?.reviews}
        deleteReview={(id) => deleteReview(id)}
      />
    </main>
  );
};
export default ProductShowPage;
