import React from 'react'
import ProductCard from '../containers/ProductCard'
import useGetProducts from '../hooks/useGetProducts'
import "../assets/css/containers/cards__box--total.css"

const API = "https://fakestoreapi.com/products?limit=25"

const ProductRow = () => {

  const products = useGetProducts(API)

  return (
    <section className="products__row" id="pc-builds">
      <div className="products__header flex">
        <h2>Popular</h2>
        <a href="./products.html">See all<i className="fa-solid fa-arrow-right-long"></i></a>
      </div>
      <div className="cards__box">
      {products.map(product => (
              <ProductCard 
                key= {product.id}
                id = {product.id}
                images = {product.image}
                title = {product.title}
                price = {product.price}
              />
            ))}
      </div>
    </section>
  );
  }

export default ProductRow