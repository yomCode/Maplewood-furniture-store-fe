import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {IoIosCart } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import SideBar from '../../components/SideBar/SideBar';

const Orders= () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='account-dashboard py-5 pb-0'>
      {screenSize > 768 ? (
        <div className='row mx-auto'>
          {/* Desktop layout */}
          <div className='col-md-4'>
            <SideBar />
            <p className='text-20xl text-red-700'></p>
          </div>

          <div className='col-md-8 bg-white drop-shadow-md rounded-md pb-5 divide-y'>
              <div className="border-gray-300 border-b-1 py-3">
                <h1 className='text-2xl font-bold-900 '>Orders</h1>
              </div>

              <div className='mx-2'>
                <div className='flex justify-center align-middle pb-2 pt-4'>
                  <FaShoppingCart className='text-5xl rounded-full text-[#917307]'/>
                </div>
                <div className='flex justify-center align-middle py-2 font-bold-900 text-2xl'>
                  <h1>You have placed no orders yet!</h1>
                </div>
                <div className='flex justify-center align-middle py-2 text-xl text-center'>
                  <h3>All your orders will be saved here for you to access their state anytime.</h3>
                </div>  
                <div className='flex justify-center align-middle py-3  text-xl'>
                  <Link to="/shop" className='bg-[#917307] text-white px-3 py-3 rounded-md drop-shadow-md hover:text-xl hover:bg-[#796006]'>CONTINUE SHOPPING</Link>
                </div>
              </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Mobile layout */}
        </div>
      )}
    </div>
  );
}

export default Orders;
