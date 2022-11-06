import { Button, Form } from "react-bootstrap";
import { CartContext } from '../CartContext';
import { useContext } from "react";
import { getProductData } from "../productsStore";
import CartProduct from "../components/CartProduct";

function Checkout() {
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <div>
            <h1>
            {productsCount > 0 ?
                        <>
                            <p>Items in Your Cart:</p>
                            {cart.items.map((currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}

                            <h1>Total: {cart.getTotalCost()}</h1>

                            <Button variant="success" href="/checkout">
                                Checkout
                            </Button>
                        </>
                    :
                        <h1>There are no items yet!</h1>
                    }
            </h1>
        </div>

        
    )

}

export default Checkout;