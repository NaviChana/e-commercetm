import { Children, createContext, useEffect, useState } from "react";
import { productsArray, getProductData } from './productsStore';


export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
})

const cartFromLS = JSON.parse(localStorage.getItem('cart'))

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartProducts));
    }, [cartProducts]);

    // [ { id: 1, quantity: 2 } ]

    function getProductQuantity(id) {
      const quantity = cartProducts.find(product => product.id === id)?.quantity;

      if ( quantity === undefined) {
        return 0;
      }
      return quantity;
    }

    function addToCart(id) {
        const quantity = getProductQuantity(id);

        if ( quantity === 0 ) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else { // product is in cart
            setCartProducts(
                cartProducts.map(
                    product => 
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity + 1} // if statement is true
                    : product                                      // if statement is false
                )
            )
        }
    }

    function removeFromCart(id) {
        const quantity = getProductQuantity(id);

        if ( quantity === 1 ) { // product is not in cart
            deleteFromCart(id);
        } else { // product is in cart
            setCartProducts(
                cartProducts.map(
                    product => 
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity - 1} // if statement is true
                    : product                                      // if statement is false
                )
            )
        }
    }

    function deleteFromCart(id) {
        // if an obj meets a condition, add obj to the array
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            }) 

        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
            return totalCost;
        });
       
    }


    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addToCart,
        removeFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;


/**Context:
 * cart
 * addToCart
 * removeFromCart
 * 
 * Provider:
 * gives react app access to all things within the context
 */