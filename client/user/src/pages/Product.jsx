import React from 'react'
import BreadcrumbsProduct from '../features/ProductPage/Breadcrumbs'
import Product from '../features/ProductPage/Product'

import product from '../mocks/Product/data'

const ProductPage = () => {

  return (
    <div className='py-10'>
        <BreadcrumbsProduct productName="CloudFee Hạnh Nhân Nướng" />
        <Product product={product} />
    </div>
  )
}

export default ProductPage