import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import CheckoutCard from '../../components/CheckoutCard/CheckoutCard';
import { useAuth } from '../../context/authcontext';
import Modal from '../../components/Modal/Modal';
import "./checkout.css";

const Checkout2 = () => {
  const [pickup, setPickUp] = useState("");
  const { cartItems, GetAllCartItems, GetPickUpCentersByStateConfig, pickupCentersInState} = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSubmitPickupState = (e, pickupState) => {
    e.preventDefault();
    toggleModal();
    GetPickUpCentersByStateConfig(pickupState);
    setPickUp("");
  }

  const [pickupCenter, setPickUpCenter] = useState=("");

  const handleChange = (e) => {
    setPickUpCenter(e.target.value);
  }

  const handleSubmitPickupCenter = (e) => {
    e.preventDefault();
    setPickUpCenter("");
  }

  useEffect(() => {
    GetAllCartItems();
    GetPickUpCentersByStateConfig();
  }, [])

  const number = 3;

  return (
    <div className='lg:mx-20 lg:pr-8 lg:pl-25 lg:pb-5 lg:pt-10 sm:mx-5'>
     {(cartItems === null || cartItems.items.length === 0) ? <div className='text-center mt-20'>
          <h1 className='text-3xl font-bold-900 my-5 pb-30'>You have 0 item(s) in your cart</h1>
          <div className='flex justify-center align-middle py-3 text-xl'>
            <Link to="/shop" className='bg-[#917307] p-3 text-white focus:text-[#917307] active:text-[#917307] focus:bg-white active:bg-white rounded-md drop-shadow-md hover:text-2xl hover:drop-shadow-lg
             hover:text-[#917307] !important ' >
              CONTINUE SHOPPING
            </Link>
          </div>
      </div> 
        :
       <div>
      <div className='row'>
          <h1 className='text-3xl font-extrabold pb-2'>Checkout</h1>
      </div>

      <div className='row'>
        <div className='col-md-8'>
            <CheckoutCard title="1. PICKUP STATION">
            <form onSubmit={e => handleSubmitPickupState(e, pickup)} className="pt-3">
                <label htmlFor="pickup-stations" className='text-xl mb-3 form-label'>Select a pickup station near you: </label>
                <select onChange={(e) => setPickUp(e.target.value)} name="pickup" id="pickup-stations" className='form-control text-lg'>
                    <option value="">Select state</option>
                    <option value="Abia">Abia</option>
                    <option value="Adamawa">Adamawa</option>
                    <option value="Akwa Ibom">Akwa Ibom</option>
                    <option value="Anambra">Anambra</option>
                    <option value="Bauchi">Bauchi</option>
                    <option value="Bayelsa">Bayelsa</option>
                    <option value="Benue">Benue</option>
                    <option value="Borno">Borno</option>
                    <option value="Cross River">Cross River</option>
                    <option value="Delta">Delta</option>
                    <option value="Ebonyi">Ebonyi</option>
                    <option value="Edo">Edo</option>
                    <option value="Ekiti">Ekiti</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Gombe">Gombe</option>
                    <option value="Imo">Imo</option>
                    <option value="Jigawa">Jigawa</option>
                    <option value="Kaduna">Kaduna</option>
                    <option value="Kano">Kano</option>
                    <option value="Katsina">Katsina</option>
                    <option value="Kebbi">Kebbi</option>
                    <option value="Kogi">Kogi</option>
                    <option value="Kwara">Kwara</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Nasarawa">Nasarawa</option>
                    <option value="Niger">Niger</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Ondo">Ondo</option>
                    <option value="Osun">Osun</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Plateau">Plateau</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Sokoto">Sokoto</option>
                    <option value="Taraba">Taraba</option>
                    <option value="Yobe">Yobe</option>
                    <option value="Zamfara">Zamfara</option>
                </select>

                <div>
                    <button className="submit mt-4 mb-2 px-5 py-3 text-lg font-extrabold hover:text-white">Submit</button>
                </div>
              </form>
            </CheckoutCard>
        </div>

        <div className='col-md-4'>
            <CheckoutCard title={`2. Your Order(${number} items)`}>
                <div className='divide-y'>
                  {cartItems.items.map((item, index)  => {
                    return(
                      <div key={index} className="py-2">
                          <p>{item.productName}</p>
                          <p className='text-[#917307]'>₦ {item.unitPrice}</p>
                          <p className='text-gray-400'>Qty : {item.orderQty}</p>
                      </div>
                    )
                  })}
                  <div className="flex justify-between my-3 font-extrabold pt-3">
                    <h1 className='text-2xl text-gray-800'>Total</h1>
                    <p>${cartItems.total}</p>
                  </div>

                  <div className='text-center py-3'>
                    <Link to="/shopping-cart" className="text-[#917307] hover:p-3 hover:font-bold-900 hover:rounded-md hover:drop-shadow-md hover:bg-[#e6d69d] focus:text-white active:text-white hover:pt-5">Modify Cart</Link>
                  </div>
                </div>
            </CheckoutCard>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <h2 className="text-md font-bold mb-4 uppercase">Please select a pickup center in your state :</h2>
          {pickupCentersInState.length > 0 && pickupCentersInState.map((item, index)=>
            <div>
              <form onSubmit={handleSubmitPickupCenter}>
                <div>
                  <label class="">{item.name}</label>
                  <input type="radio" name={pickupCenter} value={pickupCenter} onChange={handleChange}></input>
                </div>
                <ul key={index}>
                  <p >{item.name}</p>
                  <p>{item.location}</p>
                  <p>{item.state}</p>
                  <p>{item.phone}</p>
                  <p>{item.email}</p>
                  <p>Delivery fee: ₦{item.delivery}</p>
                </ul>
              </form>
            </div>       
              )}
        </Modal>
      )}
      </div>
    }
    </div>
  )
}

export default Checkout2;