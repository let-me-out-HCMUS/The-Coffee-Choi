import React from 'react'
import ProductCard from '../../ProductCard/ProductCard'

const CoupleProducts = ({products}) => {
  return (
    <div className='grid grid-cols-2 gap-x-8'>
        {products.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default CoupleProducts