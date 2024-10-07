
import './App.css';
import Header from "./components/Header/Header";
import Global from "./components/Global/Global";
import Carts from "./components/Carts/Carts"
import { useState } from 'react';
import { Route,Routes } from 'react-router';

function App() {
  const [show,setShow] = useState([]);
  const [cart,setCart] = useState ([]);
  const handleClick = (item)=> {
    let isPresent = false;
    cart.forEach((product) => {
     if(item.id === product.id)
       isPresent = true;
    })
  
   setCart([...cart, item])
 }
  return <>
  <Header size= {cart.length} setShow={setShow}/>
  {
    show ? <Global handleClick={handleClick}/>: <Carts cart={cart} setCart={setCart}/>
  }

  </>
    
}

export default App;

