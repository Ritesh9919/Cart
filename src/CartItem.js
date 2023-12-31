import React from "react";


const CartItem = (props) => {

        const { title, price, quantity} = props.product;
        const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img}/>
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


const styles = {
    image: {
        width: 110,
        height: 110,
        borderRadius: 4,

    }
}

export default CartItem;