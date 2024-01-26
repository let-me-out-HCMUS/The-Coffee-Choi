import React from 'react'
import convertToVND from '../../utils/convertToVND'
import ProductCard from '../ProductCard/ProductCard'
import BottleIcon from '../../assets/icons/bottle.svg'
import BottleWhiteIcon from '../../assets/icons/bottle-white.svg'
import toast from 'react-hot-toast'
import { CartContext } from '../../contexts/cartContext'

const Product = ({productData}) => {
    const product = productData.product

    const { addToCart } = React.useContext(CartContext)

    const [selectedTopping, setSelectedTopping] = React.useState([])
    const [selectedSize, setSelectedSize] = React.useState(productData.size[0])

    const handlePickSize = (size) => {
        setSelectedSize(size)
    }

    const handlePickTopping = (topping) => {
        if(selectedTopping.includes(topping)) {
            setSelectedTopping(selectedTopping.filter(item => item !== topping))
        } else {
            setSelectedTopping([...selectedTopping, topping])
        }
    }

    const handleAddToCart = () => {
        addToCart({
            ...product,
            size: selectedSize,
            toppings: selectedTopping
        })

        toast.success('Thêm vào giỏ hàng thành công')
    }

  return (
    <div className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="mx-auto">
            <img src={product.image} width={480} alt="" />
            </div>
            <div className="py-4">
            <div>
                <p className="font-semibold text-2xl">{product.name}</p>
                <span className="text-orange-500 tracking-wider text-2xl font-bold">{convertToVND(
                    product.price + selectedSize.price + selectedTopping.reduce((total, topping) => total + topping.price, 0)
                )}</span>
            </div>
            <div className="mt-4">
                <span className="font-bold">Chọn size (mặc định: nhỏ)</span>
                <div className="flex flex-wrap mt-4">
                    {
                        productData.size.map((size) => (
                        <button key={size._id} onClick={() => handlePickSize(size)} className={`${selectedSize.name === size.name ? 'text-white bg-orange-400': ''} border w-fit mr-4 mb-4 flex items-center py-2 px-5 rounded-md font-light`}>
                            <img src={selectedSize.name === size.name ? BottleWhiteIcon : BottleIcon} width={12} height={16} alt="BottleIcon" />
                            <span className='ml-2'>{size.name} + {convertToVND(size.price)}</span>
                        </button>
                    ))
                    }
                </div>
            </div>
            <div className="mt-4">
                <span className="font-bold">Topping thêm</span>
                <div className="flex flex-wrap py-4">
                {
                    productData.topping.map((topping) => (
                        <button key={topping.id} onClick={() => handlePickTopping(topping)} className={`${selectedTopping.includes(topping) ? 'text-white bg-orange-400': ''} border w-fit mr-4 mb-4 flex items-center py-2 px-5 rounded-md font-light`}>
                            <span>{topping.name} + {convertToVND(topping.price)}</span>
                        </button>
                    ))
                }
                </div>
            </div>
            <div className="flex justify-center">
                <button onClick={() => handleAddToCart()} className="bg-orange-500 text-white w-full font-bold py-3 rounded-xl">
                Thêm vào giỏ hàng
                </button>
            </div>
            </div>
        </div>
        <div className="mt-4 py-4 border-y-2">
            <span className="font-semibold">Mô tả sản phẩm</span>
            <p>{product.description}</p>
        </div>
        <div className="mt-4 py-4 border-b-2">
            <span className="font-semibold">Sản phẩm liên quan</span>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4 mt-4">
                {
                    productData.relatedProducts.map((product) => (
                    <ProductCard key={product._id} product={product}/>
                ))
                }
            </div>
        </div>
    </div>
  )
}

export default Product