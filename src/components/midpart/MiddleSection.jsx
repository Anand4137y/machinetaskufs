import React from 'react'
import ProductList from './ProductList'
import './Middlesection.css'
import one from '../../../src/assets/one.png'
import two from '../../../src/assets/two.png'
import three from '../../../src/assets/three.png'
import last from '../../../src/assets/last.png'

function MiddleSection() {
  return (  
      <section style={{display:"flex",flexDirection:"row",padding:"0 60px",columnGap:"8px",paddingBottom:"80px"}}>
        <div className='firstsection'>
          <div><img className='range' src={one} alt="" /></div>

          <div><img className='product' src={two} alt="" /></div>

          <div><img className='range' src={three} alt="" /></div>

          <div><img className='ads' src={last} alt="" /></div>
            
        </div>

        
        <div className='secondsection'>
        <ProductList/>

        </div>
    </section>

  )
}

export default MiddleSection