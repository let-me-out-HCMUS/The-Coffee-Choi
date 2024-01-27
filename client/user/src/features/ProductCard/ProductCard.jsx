import convertToVND from '../../utils/convertToVND'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {

  return (
    <Link to={`/products/${product.slug}`}>
        <img className="rounded-xl shadow-xl cursor-pointer" src={product.image} alt="" />
        <p className="mt-4 cursor-pointer hover:text-orange-400 transition-all duration-300 text-sm font-semibold md:text-lg">{product.name}</p>
        <span className="font-light tracking-wider">{convertToVND(product.price)}</span>
    </Link>
  )
}

export default ProductCard