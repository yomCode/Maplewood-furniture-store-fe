import React, { createContext } from "react";
import {
  apiGet,
  apiGetAuthorization,
  apiPost,
  apiPostAuthorization,
  apiPut,
} from "../utils/api/axios";
import { toast } from "react-toastify";
import {
  errorNotification,
  successNotification,
} from "../components/Notification";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [getUser, setGetUser] = React.useState({});

  const [getWallet, setGetWallet] = React.useState({});

  const [getAddressbook, setGetAddressbook] = React.useState([]);
  const [newAddress, setNewAddress] = React.useState({});
  // const [getVendors, setGetVendors] = React.useState([]);
  // const [getVendorFood, setGetVendorsFood] = React.useState([]);

  /**==============Registration======= **/
  const registerConfig = async (formData) => {
    try {
      const registerData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        gender: formData.gender,
        date_of_birth: formData.date_of_birth,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
      };
      await apiPost("customer/signup", registerData).then((res) => {
        successNotification(res.data.data);
        toast.success(res.data.data);
        console.log(res.data.data);
        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      });
    } catch (err) {
      errorNotification(err.response.data.message);
      console.log(err.response.data.message);
    }
  };


 const ForgottenConfig = async (formData) => {
   try {
     const registerData = { 
       email: formData.email,
     };
     await apiPost("auth/forgot-password-request", registerData).then((res) => {
       successNotification(res.data);
       toast.success(res.data.data);
       console.log(res.data.data);
       setTimeout(() => {
         window.location.href = "/forgotpassword";
       }, 1500);
     });
   } catch (err) {
     errorNotification(err.response.data.message);
     console.log(err.response.data.message);
   }
 };



  /**==============OTP Verification ======= **/
  const OTPConfig = async (formData, signature) => {
    try {
      const otpData = {
        otp: formData,
      };

      await apiPost(`/users/verify/${signature}`, otpData).then((res) => {
        toast.success(res.data.message);
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      });
    } catch (err) {
      toast.error(err.response.data.Error);
    }
  };

  /**==============Resend OTP ======= **/

  const ResendOTP = async (signature) => {
    try {
      await apiGet(`/users/resend-otp/${signature}`).then((res) => {
        toast.success(res.data.message);
        setTimeout(() => {
          window.location.href = "/otp";
        }, 2000);
      });
    } catch (err) {
      toast.error(err.response.data.Error);
    }
  };

  /**==============Login ======= **/
  const LoginConfig = async (formData) => {
    try {
      const LoginData = {
        email: formData.email,
        password: formData.password,
      };
      await apiPost("auth/login", LoginData)
        .then((res) => {
          successNotification(res.data.message);
          console.log(res.data.message);
          localStorage.setItem("signature", res.data.data);
          // localStorage.setItem("role", res.data.role);
          setTimeout(() => {
            window.location.href = "/shop";
          }, 1500);
        })
        .catch((err) => {
          console.log(err.response.data.message);
          errorNotification(err.response.data.message);
        });
    } catch (err) {
      console.log(err.response.data.message);
      errorNotification(err.response.data.message);
    }
  };

  /**==============Logout ======= **/
  const Logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  // ===================Get User========================

  const GetUser = async () => {
    try {
      await apiGetAuthorization(`customer/view-profile`).then((res) => {
        setGetUser(res.data);
        console.log(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };


  const GetWallet = async () => {
    try {
      await apiGetAuthorization(`customer/wallet/info`).then((res) => {
        setGetWallet(res.data.data);
        console.log(res.data.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // ==================Update profile=================
  const updateUserConfig = async (formData) => {
    try {
      const updateData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        date_of_birth: formData.date_of_birth,
        phone: formData.phone,
      };
      await apiPut("customer/edit-profile", updateData).then((res) => {
        successNotification(res.data);
        console.log(res.data);
      });
    } catch (err) {
      errorNotification(err.response.data.message);
      console.log(err.response.data.message);
    }
  };

  // ==============Update password=====================

  const updatePasswordConfig = async (passwordData) => {
    try {
      const updatePasswordData = {
        oldPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      };
      await apiPut("auth/update-password", updatePasswordData).then((res) => {
        successNotification(res.data);
        console.log(JSON.stringify(res.data));
      });
    } catch (err) {
      errorNotification(err.response.data);
      console.log(err.response.data);
    }
  };



  // =================New Address====================

  const CreateAddress = async (formData) => {
    try{
      const addressData = {
        fullName: formData.fullName,
        phone: formData.phone,
        emailAddress: formData.email,
        street: formData.street,
        state: formData.state,
        country: formData.country
      }
      await apiPostAuthorization('address/new', addressData).then((res) => {
        successNotification(res.data)
        console.log(res.data)
      })
    }catch(err){
      errorNotification(err.response.data)
      console.log(err.response.data)
    }
  }

  /**=============Get Addressbook ======= **/
  const GetAddressbook = async () => {
    try {
      await apiGetAuthorization("address/all").then((res) => {
        setGetAddressbook(res.data);
        console.log(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  /**=============Get all foods By Vendor ======= **/
  // const GetAllVendorsFood = async (vendorId) => {
  //   try {
  //     await apiGet(`/vendors/get-vendor-food/${vendorId}`).then((res) => {
  //       setGetVendorsFood([...res.data.Vendor.food]);
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  /**============= Add to Cart ======= **/
  const [cartItem, setCartItem] = React.useState([]);
  const handleAddFood = (product) => {
    const ProductExist = cartItem.find((item) => item.id === product.id);

    if (ProductExist) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  /**============= Decrease Items in cart ======= **/
  const handleRemove = (product) => {
    const ProductExist = cartItem.find((item) => item.id === product.id);

    if (ProductExist.quantity === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  /**============= Clear cart ======= **/
  const handleClear = () => {
    setCartItem([]);
  };

  return (
    <dataContext.Provider
      value={{
        registerConfig,
        updateUserConfig,
        updatePasswordConfig,
        ForgottenConfig,
        LoginConfig,
        Logout,
        GetUser,
        GetWallet,
        getUser,
        getWallet,
        setGetUser,
        setGetWallet,
        GetAddressbook,
        getAddressbook,
        CreateAddress,
        newAddress,
        // GetAllVendorsFood,
        // getVendorFood,
        cartItem,
        handleAddFood,



        OTPConfig,
        handleRemove,
        handleClear,
        ResendOTP,
        // GetAllVendors,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(dataContext);
  if (context === "undefined") {
    throw new Error("useAuth must be used within the auth provider");
  }
  return context;
};

export default DataProvider;
