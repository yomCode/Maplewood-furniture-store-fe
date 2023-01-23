import React from 'react';
import { useCart } from "react-use-cart";
import { useAuth } from '../../context/authcontext';
import "./shoppingcart.css";

const ShoppingCart = () => {
    const { 
      items,
      isEmpty,
      totalUniqueItems,
      totalItems,
      cartTotal,
      updateItemQuantity,
      removeItem,
      emptyCart
  } = useCart();

  const { RemoveItemFromCart } = useAuth();

  const handleRemoveItemFromCart = (itemId) => {
      removeItem(itemId);
      RemoveItemFromCart(itemId);
  }

  const handleUpdateItemQuantity = () => {

  }

  const handleUpdateCartQuantity = () => {
    
  }

  return (
    <div className='cart'>
      <h1 className='text-4xl font-bold-1000 mb-5'>Shopping Cart</h1>

      <div>
          <table class="table">
          <thead class="thead-dark bg-dark text-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th>Remove Item</th>
            </tr>
          </thead>

          <tbody>
              {items.map((item, index) => {
                return(
                  <tr key={index}>
                      <td>
                          <img src={item.img} style={{height: '6rem'}}/>
                      </td>
                      <td>{item.name}</td>
                      <td>Price: ${item.price}</td>
                      <td>Quantity: {item.quantity}</td>
                      <td>Total: {item.price * item.quantity}</td>
                      <td>
                          <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity-1)}>-</button> 
                          <span className='ms-2'>{item.quantity}</span>
                          <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity+1)}>+</button>
                          <button className='btn btn-danger ms-2' onClick={() => removeItem(item.id)}>Remove Item</button>
                      </td>
                  </tr>
               )
              })} 
          </tbody>
        </table>
      </div>

      <div className='col-auto'>
          <button className='btn btn-danger m-2' onClick={() => emptyCart()}>Clear Cart</button>
      </div>
    </div>
  )
}

export default ShoppingCart;