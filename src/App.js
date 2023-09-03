import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';



class App extends React.Component {
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

handleIncreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].quantity += 1;
    this.setState({
        products:products
    })
}

handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    
    const index = products.indexOf(product);
    if(products[index].quantity == 0) {
        return;
    }
    products[index].quantity -=1;
    this.setState({
        products:products
    })
}

handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => {
        return item.id != id;
    })
    this.setState({
        products:items
    })
}

getCartCount = () => {
  const {products} = this.state;
  let count = 0;
  products.forEach((product) => {
    count += product.quantity;
  })
  return count;
}
  render() {
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart 
      products={this.state.products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}

          
      />
    </div>
  );
  }
}

export default App;
