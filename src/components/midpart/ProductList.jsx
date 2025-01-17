import React from 'react'
import './ProductList.css'
import products from '../../assets/products.png'
import mainsearch from '../../assets/mainsearch.png'
import sortbar from '../../assets/sort.png'

function ProductList() {
  return (
    <div className='middlesection'>


      <img src={mainsearch} alt="" />
      <img src={sortbar} alt="" />

       <div className='productContainer'>
       <img src={products} alt="" />
       <img src={products} alt="" />
       </div>
    </div>
  )
}

export default ProductList