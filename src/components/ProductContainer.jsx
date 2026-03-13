import React from 'react'
import ProductCard from './ProductCard'

const ProductContainer = () => {
    const data=[{id:1,productname:"mobile",price:10000},
        {id:2,productname:"keyboard",price:1000},{id:3,productname:"laptop",price:100000}]
  return (
    <div>
        <ProductCard datas={data}></ProductCard>
      
    </div>
  )
}

export default ProductContainer
