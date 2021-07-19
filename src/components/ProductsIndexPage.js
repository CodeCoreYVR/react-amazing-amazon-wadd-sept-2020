import React, { useState, useEffect } from "react";
import { Product } from "../requests";
import { Link } from "react-router-dom";
import { Card, Button } from 'semantic-ui-react'

const ProductsIndexPage = () => {
  const [productIndex, setProductIndex] = useState({
    products: [],
  });

  const deleteProduct = (id) => {
    const newProductList = productIndex.products.filter((p) => p.id !== id);
    setProductIndex({ ...productIndex, products: newProductList });
  };
  useEffect(() => {
    Product.index().then((products) => {
      setProductIndex({ products });
    });
  }, []);

  return (

    <Card.Group centered>
    {productIndex.products.map((product) => {
      const url=`/products/${product.id}`
      return (
        <Card >
          <Card.Content>
            <Card.Header href={url}>{product.title}</Card.Header>
            <Card.Meta>{product.price}</Card.Meta>
            <Card.Description>{product.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
          <Button fluid onClick={() => deleteProduct(product.id)}>Delete</Button>
          </Card.Content>
        </Card>
   
      );
    })}
  </Card.Group>



  );
};

export default ProductsIndexPage;
