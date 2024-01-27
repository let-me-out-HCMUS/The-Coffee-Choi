import { createContext, useState, useContext, useEffect } from "react";
import { AuthContext } from "./authContext";

export const CartContext = createContext();

export default function ({ children }){
    const {currentUser} = useContext(AuthContext);

    const [cart, setCart] = useState([]); // [{}]

    useEffect(() => {
        if (currentUser){
            const cart = JSON.parse(localStorage.getItem(`coffee-choi-cart-${currentUser.email}`));
            setCart(cart || []);
        }
    }, [currentUser])

    const findIndex = (product) => {
        return cart.findIndex((item) => {
            return item.id === product.id && item.size.name === product.size.name && item.toppings.length === product.toppings.length && item.toppings.every((topping) => product.toppings.includes(topping));
        });
    };

    const saveCartToLocalStorage = (cart) => {
        localStorage.setItem(`coffee-choi-cart-${currentUser.email}`, JSON.stringify(cart));
    }

    const addToCart = (product) => {
        // Check if product is already in cart
        const index = findIndex(product);
        if (index !== -1) {
            // Product is already in cart
            const newCart = [...cart];
            newCart[index].quantity += 1;
            setCart(newCart);
            saveCartToLocalStorage(newCart);
        } else {
            // Product is not in cart
            setCart([...cart, { ...product, quantity: 1 }]);
            saveCartToLocalStorage([...cart, { ...product, quantity: 1 }]);
        }

    };


    const removeFromCart = (product) => {
        const index = findIndex(product);

        if (index !== -1) {
            const newCart = [...cart];
            newCart.splice(index, 1);
            setCart(newCart);
            saveCartToLocalStorage(newCart);
        }

    };

    const updateQuantity = (product, quantity) => {
        const index = findIndex(product);
        if (index !== -1) {
            const newCart = [...cart];
            newCart[index].quantity = quantity;
            setCart(newCart);
            saveCartToLocalStorage(cart);
        }
    };

    const clearCart = () => {
        setCart([]);

        saveCartToLocalStorage([]);
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => {
            return total + item.quantity * (item.price + item.size.price + item.toppings.reduce((acc, topping) => acc + topping.price, 0));
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