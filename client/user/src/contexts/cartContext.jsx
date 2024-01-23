import { createContext, useState } from "react";

export const CartContext = createContext();

export default function ({ children }){

    const [cart, setCart] = useState([
    ]); // [{}]

    const findIndex = (product) => {
        return cart.findIndex((item) => {
            return item.id === product.id && item.size.name === product.size.name && item.toppings.length === product.toppings.length && item.toppings.every((topping) => product.toppings.includes(topping));
        });
    };

    const addToCart = (product) => {
        // Check if product is already in cart
        const index = findIndex(product);
        if (index !== -1) {
            // Product is already in cart
            const newCart = [...cart];
            newCart[index].quantity += 1;
            setCart(newCart);
        } else {
            // Product is not in cart
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    

    const removeFromCart = (product) => {
        const index = findIndex(product);

        if (index !== -1) {
            const newCart = [...cart];
            newCart.splice(index, 1);
            setCart(newCart);
        }
    };

    const updateQuantity = (product, quantity) => {
        const index = findIndex(product);
        if (index !== -1) {
            const newCart = [...cart];
            newCart[index].quantity = quantity;
            setCart(newCart);
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => {
            return total + item.quantity * (item.price + item.size.extraPrice + item.toppings.reduce((acc, topping) => acc + topping.extraPrice, 0));
        }, 0);
    };

    const getCartQuantity = () => {
        return cart.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
    };

    const getCart = () => {
        return cart;
    };

    const value = {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartQuantity,
        getCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};