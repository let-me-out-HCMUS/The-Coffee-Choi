import React from 'react'
import BreadcrumbsProduct from '../features/ProductPage/Breadcrumbs'
import Product from '../features/ProductPage/Product'
import { getProduct } from '../services/products'
import Spinner from '../features/common/Spinner'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const { slug } = useParams()

  const [product, setProduct] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const res = await getProduct(slug)

      if (res.status === 'fail') {
        return window.location.replace('/404')
      }

      setProduct(res.data)
    }

    getData()
  }, [slug])

  if (!product) return <Spinner />

  return (
    <div className='py-10'>
      <BreadcrumbsProduct productName={product.product.name} />
      <Product productData={product} />
    </div>
  )
}

export default ProductPage