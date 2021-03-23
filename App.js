import React from 'react';
import './App.css';
import Footer from './components/footer';
import NavBar from './components/navBar';
import QuantityPicker from './components/quantityPicker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import Product from './components/product';

function App() {
  return (
    
    <div className="App">
      <NavBar class="navBar"></NavBar>


        <h1>Hello World!</h1>
        <div style={{ backgroundImage: "url(/brain.jpg)" }}>
          
        </div>
        
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>


        <Footer></Footer>

        

    </div>
    

  );
}

export default App;
