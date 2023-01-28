import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { TbCurrencyNaira } from "react-icons/tb";
import DashboardCard from "../../components/DashboardComponents/DashboardCard";
import SideBar from "../../components/SideBar/SideBar";
import { useAuth } from "../../context/authcontext";
import "./accountDashboard.css";
import { ProtectCustomerRoute } from "../../context/ProtectRoute";

const AccountDashboard = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  const { GetUser, getUser, setGetUser } = useAuth();

  console.log(getUser);

  const { GetWallet, getWallet, setGetWallet } = useAuth();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    GetUser();
  }, [GetUser]);

 useEffect(() => {
   GetWallet();
 }, [GetWallet]);


  const onChange = (e) => {
    e.preventDefault();
    setGetUser({ ...getUser, [e.target.name]: e.target.value });
    setGetWallet({...getWallet, [e.target.name]: e.target.value});
  };

  return (
    <div className="account-dashboard py-5 pb-0">
      {screenSize > 768 ? (
        <div className="row mx-auto">
          {/* Desktop layout */}
          <div className="col-md-4">
            <SideBar />
            <p className="text-20xl text-red-700"></p>
          </div>

          <div className="col-md-8 bg-white drop-shadow-md rounded-md pb-5 divide-y">
            <div className="border-gray-300 border-b-1 py-3">
              <h1 className="text-2xl font-bold-900 ">Account Overview</h1>
            </div>

            <div className="grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 gap-3 px-3 pt-4">
              <div className="">
                <DashboardCard
                  title="Account Details"
                  subtitle={getUser.firstName}
                  content={getUser.email}
                />
              </div>

              <div className="">
                <DashboardCard
                  title="Address Book"
                  subtitle="Your Default Shipping Address"
                  content={getUser.address}
                  icon={<BiEditAlt />}
                />
              </div>
              <div className="">
                <DashboardCard
                  title="Wallet Balance"
                  content={getWallet.walletBalance}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>{/* Mobile layout */}</div>
      )}
    </div>
  );
};

export default AccountDashboard;
