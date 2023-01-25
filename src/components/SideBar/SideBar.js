import React from 'react';
import { FaRegUser, FaRegAddressCard } from "react-icons/fa";
import { AiOutlineInbox, AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import SideBarElement from '../SideBarElement/SideBarElement';
import "./sideBar.css";
import { useAuth } from '../../context/authcontext';

const SideBar = () => {
  const { Logout } = useAuth();
  return (
    <div className='bg-white drop-shadow-md rounded-md lg:h-100'>
      <div>
        <SideBarElement name="My Oakland Account" icon={<FaRegUser />} to="/dashboard" />
        <SideBarElement name="Orders" icon={<AiOutlineInbox to="/contactus"/>}/>
        <SideBarElement name="Favourites" icon={<AiOutlineHeart to="/"/>}/>
        <SideBarElement name="Edit Profile" icon={<BiEditAlt />} to="/dashboard-acc-info"/>
        <SideBarElement name="Address Book" icon={<FaRegAddressCard />} to="/addressbook"/>
        <SideBarElement name="Close Account" icon={<AiOutlineCloseCircle to="/"/>}/>
      </div>
      
        <div className='flex justify-center border-t-2 border-gray-200 p-3 mt-2 w-100'>
          <button onClick={() => Logout()} className='text-orange-500 text-xl font-bold-900'>LOGOUT</button>
        </div>
    </div>
  )
}

export default SideBar;