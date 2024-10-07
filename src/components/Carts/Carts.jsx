import React, { useEffect, useState } from 'react';
import { FaCheckSquare } from "react-icons/fa";

export default function Carts({cart, setCart}) {
       const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let store = 0;
        cart.map((item) => (
            store += item.amount * item.price
        )) 
        setPrice(store)
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    }

    useEffect(() => {
        handlePrice();
    })
  return (
    <div className="carts-container">
      <h2 className='text-3xl font-bold ml-16 py-3'>Корзина</h2>
      <div className="content">
        { 
             cart?.map((item) => (
                                <div className="cart_box flex" key={item.id}>
                                    <div className="cart_img ml-8">
                                        <img src={item.img} alt="img" />
                                      
                                    </div>
                                    <div className='ml-10 pt-5'>

                                       <p className='font-bold'>{item.title}</p>
                                  
                                  <div className='my-8'>
                                        <p>{item.price} руб</p>
                                        <FaCheckSquare onClick={() => handleRemove(item.id)} className='icon'/>
                                  </div>

                                    </div>
                           
                                </div>
                            ))
                        }
                        <p>{price}</p>
      
      </div>
    </div>
  );
}

