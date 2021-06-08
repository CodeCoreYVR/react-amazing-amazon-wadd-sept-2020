import React from 'react';

function ProductForm(props) {
  const { onSubmit = () => {} } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const fData = new FormData(form);
    const title = fData.get('title');
    const description = fData.get('description');
    const price = fData.get('price');
    if (!title.length || !description.length || !price.length) {
      alert('All fields must be filled out');
    } else {
      onSubmit({
        title,
        description,
        price
      });
      form.reset();
    }
  };

  return (
    <form className="ProductForm" onSubmit={handleSubmit}>
      <h2>New Product</h2>
      <div>
        <label htmlFor="title">Title</label> <br />
        <input name="title" id="title" />
      </div>

      <div>
        <label htmlFor="description">Description</label> <br />
        <input name="description" id="description" />
      </div>

      <div>
        <label htmlFor="price">Price</label> <br />
        <input name="price" id="price" type="number" step="0.1" min="0" />
      </div>

      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default ProductForm;
