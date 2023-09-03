import React from "react";


class CartItem extends React.Component {


    render() {
        console.log('this props', this.props)
        const { title, price, quantity} = this.props.product;
        const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = this.props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: '25px' }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {quantity}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/748/748113.png" className="action-icons" onClick={() => onIncreaseQuantity(product)} />
                        <img alt="decrease" src="https://cdn-icons-png.flaticon.com/128/2732/2732689.png" className="action-icons" onClick={() => onDecreaseQuantity(product)} />
                        <img alt="delete" src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png" className="action-icons" onClick={()=> onDeleteProduct(product.id)}/>
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