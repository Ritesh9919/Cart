import React from "react";


class CartItem extends React.Component {
    constructor() {
        super()
        this.state = {
            title: 'Bike',
            price: 99,
            quantity: 10,
            img: ''
        }


    }
     
    increaseQuantity = () => {
     console.log(this.state);
    }

    render() {
        const { title, price, quantity, img } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: '25' }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {quantity}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/748/748113.png" className="action-icons" onClick={this.increaseQuantity} />
                        <img alt="decrease" src="https://cdn-icons-png.flaticon.com/128/2732/2732689.png" className="action-icons" />
                        <img alt="delete" src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png" className="action-icons" />
                    </div>
                </div>
            </div>
        )
    }
}


const styles = {
    image: {
        width: 110,
        height: 110,
        borderRadius: 4,

    }
}

export default CartItem;