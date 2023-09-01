import React from "react";


class CartItem extends React.Component{
    render() {
        return (
            <div className="cart-item">
             <div className="left-block">
                <img style={styles.image}/>
             </div>
             <div className="right-block">
                <div style={{fontSize:'25'}}>Phone</div>
                <div style={{color:'#777'}}>Rs 99</div>
                <div style={{color:'#777'}}>Qty: 2</div>
                <div className="cart-item-actions">
                    {/* buttons */}
                </div>
             </div>
            </div>
        )
    }
}


const styles = {
    image:{
        width:100,
        height:100,
        borderRadius:4,
        
    }
}

export default CartItem;