import React from "react";

const Navbar = (props) => {
    
        return (
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.navIcons} src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="cart-icon"/>
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            </div>
        )
    
}




const styles = {
navIcons:{
    height:32,
    marginRight:20,
    position:'relative',
    zIndex:1
},
nav:{
  height:70,
  backgroundColor:'#002fa7',
  display:'flex',
  justifyContent:'flex-end',
  alignItems:'center'

},
cartCount:{
    display:'inline-block',
    width:'15px',
    height:'15px',
    textAlign:'center',
    backgroundColor:'yellow',
    padding:'10px',
    borderRadius:'50%',
    position:'absolute',
    top:0,
    right:0
},
cartIconContainer:{
    marginRight:'7px'
}



}

export default Navbar;