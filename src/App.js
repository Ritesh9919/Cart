import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';
import {db} from './FirebaseInit';
import { collection, doc, getDocs, onSnapshot } from 'firebase/firestore';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading:true
    }
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].quantity += 1;
    this.setState({
      products: products
    })
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);
    if (products[index].quantity === 0) {
      return;
    }
    products[index].quantity -= 1;
    this.setState({
      products: products
    })
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => {
      return item.id !== id;
    })
    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.quantity;
    })
    return count;
  }

getTotalPrice = () => {
  const {products} = this.state;
  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice = totalPrice + product.price * product.quantity;
  })
  return totalPrice;
}

async componentDidMount() {
    const productsCol = collection(db, 'products');
    const productsSnapshot = await getDocs(productsCol);
    const productList = productsSnapshot.docs.map((doc) => {
      return doc.data();
    });

    

    this.setState({products:productList, loading:false});
}

  render() {
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={this.state.products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}


        />
        {this.state.loading && <h1>Loading....</h1>}
        <div style={styles.priceCon}>
          <h2 style={styles.totalPrice}>Total: {this.getTotalPrice()}</h2>
        </div>
      </div>
    );
  }
}

const styles = {
  totalPrice:{
    textAlign:'right',
    
    
  },
  priceCon:{
    width:'100%',
    height:'70px',
    backgroundColor:'lightblue',
    
  }
  
}

export default App;
