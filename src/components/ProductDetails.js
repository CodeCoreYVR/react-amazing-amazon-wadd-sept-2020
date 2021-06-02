import React from 'react';

const ProductDetails = (props)=> {
  const {title, fullName, description, price, createdAt,}=props;
  return (
    <div>
      <h1 className="header">Product: {title}</h1>
      <p>description: {description}</p>
      <p>price: ${price}</p>
      <p>Sold by: {fullName}</p>
      <p>createdAt: {createdAt}</p>
    </div>
  );
};
export default ProductDetails;
