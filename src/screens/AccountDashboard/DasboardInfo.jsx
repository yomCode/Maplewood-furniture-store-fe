import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiEditAlt } from "react-icons/bi";
import { TbCurrencyNaira } from "react-icons/tb";
import DashboardCard from '../../components/DashboardComponents/DashboardCard';
import SideBar from '../../components/SideBar/SideBar';
import './accountDashboard.css';
import UserInformation from '../../components/UserInformation/UserInformation';

const DashboardInfo= () => {
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
                <h1 className='text-2xl font-bold-900 '>Account Information</h1>
              </div>

              <UserInformation />
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

export default DashboardInfo;
