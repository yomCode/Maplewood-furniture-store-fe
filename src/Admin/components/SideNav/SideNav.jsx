import "./sidebar.scss";
import { Link } from "react-router-dom";
import { useRef } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Menu from "@mui/icons-material/Menu";
import { Category, GpsFixedSharp, Warehouse } from "@mui/icons-material";
import { useAuth } from "../../../context/authcontext";

const Sidebar = () => {
  const sidebarRef = useRef();
  const { Logout } = useAuth();

  const handleNavDisplay = () => {
    sidebarRef.current.classList.toggle("sidebar-hidden");
  };

  window.onresize = () => {
    if (window.outerWidth <= 889)
      sidebarRef.current.classList.add("sidebar-hidden");
  };

  return (
    <div className="outer-div">
      <div className="sidebar sidebar-hidden" ref={sidebarRef}>
        <div className="top ">
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <span className="logo">Oakland</span>{" "}
          </Link>
          <Menu className="icon" onClick={handleNavDisplay} />
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <Link to="/admin" style={{ textDecoration: "none" }}>
              <li className="options hover-text">
                <DashboardIcon className="icon" />
                <p>Dashboard</p>
                <span className="tooltip-text" id="right">
                  Dashboard
                </span>
              </li>
            </Link>

            <p className="title">LISTS</p>

            <Link to="/admin/users" style={{ textDecoration: "none" }}>
              <li className="options hover-text">
                <PersonOutlineIcon className="icon" />
                <p>Users</p>
                <span className="tooltip-text" id="right">
                  Users
                </span>
              </li>
            </Link>

            <Link to="/admin/products" style={{ textDecoration: "none" }}>
              <li className="options hover-text">
                <StoreIcon className="icon" />
                <p>Products</p>
                <span className="tooltip-text" id="right">
                  Products
                </span>
              </li>
            </Link>

            <Link to="/admin/orders" style={{ textDecoration: "none" }}>
              <li className="options hover-text">
                <CreditCardIcon className="icon" />
                <p>Orders</p>
                <span className="tooltip-text" id="right">
                  Orders
                </span>
              </li>
            </Link>

            {/* <Link to="/admin/delivery" style={{ textDecoration: "none" }}>
            <li className="options hover-text">
            <LocalShippingIcon className="icon" />
            <p>Delivery</p>
            <span className="tooltip-text" id="right">Delivery</span>
            </li>
          </Link> */}

            <Link to="/admin/states" style={{ textDecoration: "none" }}>
              <li className="options hover-text">
                <GpsFixedSharp className="icon" />
                <p>States</p>
                <span className="tooltip-text" id="right">
                  States{" "}
                </span>
              </li>
            </Link>

            <Link to="/admin/pickupCenter" style={{ textDecoration: "none" }}>
              <li className="options hover-text">
                <Warehouse className="icon" />
                <p>Pickup Center</p>
                <span className="tooltip-text" id="right">
                  Pickup Center
                </span>
              </li>
            </Link>

            <Link to="/admin/category" style={{ textDecoration: "none" }}>
              <li className="options hover-text">
                <Category className="icon" />
                <p>Category/Subcategory</p>
                <span className="tooltip-text" id="right">
                  Category/Subcategory
                </span>
              </li>
            </Link>

            <p className="title">USER</p>
            <Link to="/admin/category" style={{ textDecoration: "none" }}>
              <li className="options hover-text">
                <AccountCircleOutlinedIcon className="icon" />
                <p>Profile</p>
                <span className="tooltip-text" id="right">
                  Profile
                </span>
              </li>
            </Link>

            <Link onClick={Logout} style={{ textDecoration: "none" }}>
              <li className="options hover-text">
                <ExitToAppIcon className="icon" />
                <p>Logout</p>
                <span className="tooltip-text" id="right">
                  Logout
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
