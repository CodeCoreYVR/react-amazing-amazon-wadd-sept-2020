import React, { useState, useEffect } from "react";
import { Product } from "../requests";
import { Link } from "react-router-dom";

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
    <main>
      {productIndex.products.map((p) => (
        <>
          <Link to={`/products/${p.id}`}>
            <div key={p.id}>
              <h1>
                {p.id} - {p.title}
              </h1>
            </div>
          </Link>
          <button onClick={() => deleteProduct(p.id)}>Delete</button>
        </>
      ))}
    </main>
  );
};

export default ProductsIndexPage;
