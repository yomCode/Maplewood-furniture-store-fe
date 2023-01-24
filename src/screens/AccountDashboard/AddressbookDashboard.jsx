import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiEditAlt } from "react-icons/bi";
import { TbCurrencyNaira } from "react-icons/tb";
import DashboardCard from '../../components/DashboardComponents/DashboardCard';
import SideBar from '../../components/SideBar/SideBar';
import './accountDashboard.css';
import AddressBook from '../../components/AddressBook/AddressBook';

const AddressbookDashboard= () => {
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

          <div className='col-md-8 bg-white drop-shadow-md rounded-md pb-2 divide-y'>
              <div className="border-gray-300 border-b-1 py-3 flex justify-between">
                <h1 className='text-2xl font-bold-900 '>Address Book</h1>
                <Link to='/new-address' className='bg-[#7e6a17] text-[white] p-2 rounded-md'>New Address</Link>
              </div>

              <div className='grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 gap-3 px-1 pt-4'>
                  <AddressBook />
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

export default AddressbookDashboard;
