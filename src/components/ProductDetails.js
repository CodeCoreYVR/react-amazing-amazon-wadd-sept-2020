import React from 'react';

const ProductDetails = (props)=> {
  const {title, fullName,seller, description, price, created_at,}=props;
  console.log(props)
  return (
    <div>
      <h1 className="header">Product: {title}</h1>
      <p>description: {description}</p>
      <p>price: ${price}</p>
      <p>Sold by: {fullName}</p>
      <p>createdAt: {created_at}</p>
    </div>
  );
};
export default ProductDetails;
