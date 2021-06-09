import React from 'react';

const ProductForm=({createProduct})=>{
    const handleSubmit=(event)=>{
        event.preventDefault();
        const formData=new FormData(event.currentTarget);
        const params={
            title: formData.get('title'),
            description: formData.get('description'),
            price: formData.get('price')
        }
        createProduct(params);
        }
        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='title'>Title</label>
                    <br />
                    <input name='title' id='title'/>
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <br />
                    <textarea name='description' id='description'/>
                </div>
                <div>
                    <label htmlFor='price'>Price</label>
                    <br />
                    <input name='price' id='price'/>
                </div>
                <div>
        <input type='submit' value='Submit' />
      </div>
            </form>
        )
}
export default ProductForm