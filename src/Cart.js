import React from "react";
import CartItem from './CartItem';


class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                { title: 'Phone', price: 99, quantity: 5, img: '', id: 1 },
                { title: 'Car', price: 99, quantity: 5, img: '', id: 2 },
                { title: 'Bike', price: 99, quantity: 5, img: '', id: 3 },
                { title: 'Cycle', price: 99, quantity: 5, img: '', id: 4 }
            ]
        }
    }
    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem product={product} key={product.id}  />
                    )
                })}


            </div>
        );
    }
}


export default Cart;