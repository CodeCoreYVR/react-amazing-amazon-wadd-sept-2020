import React from "react";

const ProductForm = ({ createProduct, newProductData, updateProductData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct();
  };
  function handleProductInput(event) {
    const { value, name } = event.currentTarget;
    updateProductData({ [name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input
          name="title"
          id="title"
          value={newProductData.title}
          onChange={handleProductInput}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <br />
        <input
          name="description"
          id="description"
          value={newProductData.description}
          onChange={handleProductInput}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <br />
        <input
          name="price"
          id="price"
          value={newProductData.price}
          onChange={handleProductInput}
        />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};
export default ProductForm;
