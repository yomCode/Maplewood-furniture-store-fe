import React from 'react';
import { useCart } from 'react-use-cart';
import { useAuth } from '../../context/authcontext';
import CartService from '../services/CartService';

const ItemCard = (props) => {
    const { addItem } = useCart();
    const { AddToCartConfig } = useAuth();

    const handleAddItemToCart = () => {
        addItem(props.item);
        AddToCartConfig(props.productId);
    }
  

  return (
       <div className=''> 
            <div className='card shadow m-2 border-none'>
                <img src={props.img} className='item-img card-img-top img-fluid' style={{height:'300px', maxHeight:'400px'}}/>
                <div className='card-body'>
                    <h2 className='item-name'>{props.name}</h2>
                    <p className='item-price'>${props.price}</p>
                    <button onClick={handleAddItemToCart} className='rounded text-white bg-gray-500 p-4'>Add to Cart</button>
                </div>
            </div>
      </div> 
  )
}

export default ItemCard;