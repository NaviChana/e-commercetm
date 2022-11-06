import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import { CartContext } from '../CartContext'
import { useContext } from 'react'

function ProductCard(props) {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);

    console.log(cart.items);

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.desc}</Card.Text>
                <Card.Text>${product.price}</Card.Text>
                { productQuantity > 0 ? 
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button onClick={() => cart.addToCart(product.id)} sm="6" className="mx-2">+</Button>
                                <Button onClick={() => cart.removeFromCart(product.id)} sm="6" className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" className="my-2" onClick={() => cart.deleteFromCart(product.id)}>Remove From Cart</Button>
                    </>
                    : 
                    <Button variant="primary" onClick={() => cart.addToCart(product.id)}>Add to Cart</Button>
                }
            </Card.Body>
        </Card>
        
    )
}

export default ProductCard;