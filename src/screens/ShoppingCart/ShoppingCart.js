import React from 'react';
import "./shoppingcart.css";

const ShoppingCart = () => {
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
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ShoppingCart;