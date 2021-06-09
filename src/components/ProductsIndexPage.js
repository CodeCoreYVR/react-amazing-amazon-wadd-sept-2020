import React, { Component } from "react";
import { Product } from '../requests';
import { Link } from 'react-router-dom';

class ProductsIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products:[],
    };
    this.createProduct=this.createProduct.bind(this);
  }
  componentDidMount() {
    Product.index()
    .then((products)=>{
      this.setState((state)=>{
        return{
          products: products
        }
      })
    })
      }
  createProduct(params){
      this.setState((state)=>{
          return{
              products: [
                  ...state.products,
                  {id: (Math.max(...state.products.map(p=>p.id))+1),
                ...params}
              ]
          }
      })
  }
  deleteProduct(id) {
    this.setState((state) => {
      return {
        products: state.products.filter((p) => p.id !== id),
      };
    });
  }
  render() {
    return (
      <main>
        {this.state.products.map(p => {
          return (
            <Link to={`/products/${p.id}`}>
            <div key={p.id}>
              <h1>
                {p.id} - {p.title}
              </h1>
              <button onClick={() => this.deleteProduct(p.id)}>Delete</button>
            </div>
            </Link>
          );
        })}
      </main>
    );
  }
}
export default ProductsIndexPage;
