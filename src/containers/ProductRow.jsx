import React from 'react'
import ProductCard from '../containers/ProductCard'
import useGetProducts from '../hooks/useGetProducts'
import "../assets/css/containers/cards__box--total.css"

const API = "https://api.escuelajs.co/api/v1/products?limit=25&offset=1"

const ProductRow = () => {

  const products = useGetProducts(API)

  return (
    <section className="products__row" id="pc-builds">
      <div className="products__header flex">
        <h2>Populares</h2>
        <a href="./products.html">Ver todos<i className="fa-solid fa-arrow-right-long"></i></a>
      </div>
      <div className="cards__box">
      {products.map(product => (
              <ProductCard 
                key= {product.id}
                id = {product.id}
                images = {product.images}
                title = {product.title}
                price = {product.price}
              />
            ))}
      </div>
    </section>
  );
  }

export default ProductRow