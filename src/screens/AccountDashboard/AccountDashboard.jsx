import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiEditAlt } from "react-icons/bi";
import { TbCurrencyNaira } from "react-icons/tb";
import DashboardCard from '../../components/DashboardComponents/DashboardCard';
import SideBar from '../../components/SideBar/SideBar';
import './accountDashboard.css';

const AccountDashboard= () => {
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
                <h1 className='text-2xl font-bold-900 '>Account Overview</h1>
              </div>

              <div className='grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 gap-3 px-3 pt-4'>
                  <div className=''>
                      <DashboardCard title="Account Details" subtitle="Aishat Moshood" content="aishatmoshood1@gmail.com"/>
                  </div>

                  <div className=''>
                      <DashboardCard title="Address Book" subtitle="Your Default Shipping Address" content="aishatmoshood1@gmail.com" icon={<BiEditAlt />}/>
                  </div>

                  <div className=''>
                      <DashboardCard title="Wallet Amount" content="50000" icon2={<TbCurrencyNaira className="text-2xl"/>}/>
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

export default AccountDashboard;
