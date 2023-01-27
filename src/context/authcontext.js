import React, { createContext } from "react";
import { apiGet, apiPost, apiPostAuthorization, apiDeleteAuthorization,  apiPut, apiGetAuthorization } from "../utils/api/axios";
import { errorNotification, successNotification } from "../components/Notification";

// =======
// import {
//   apiGet,
//   apiGetAuthorization,
//   apiPost,
//   apiPostAuthorization,
//   apiPut,
// } from "../utils/api/axios";
// import { toast } from "react-toastify";
// import {
//   errorNotification,
//   successNotification,
// } from "../components/Notification";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [getUser, setGetUser] = React.useState({});
  const [getAddressbook, setGetAddressbook] = React.useState([]);
  const [newAddress, setNewAddress] = React.useState({});
  const [cartItems, setCartItems] = React.useState(null);

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

  /**==============OTP Verification ======= **/
  const OTPConfig = async (formData, signature) => {
    try {
      const otpData = {
        otp: formData,
      };

      await apiPost(`/users/verify/${signature}`, otpData).then((res) => {
       
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      });
    } catch (err) {
    }
  };

  /**==============Resend OTP ======= **/

  const ResendOTP = async (signature) => {
    try {
      await apiGet(`/users/resend-otp/${signature}`).then((res) => {
       
        setTimeout(() => {
          window.location.href = "/otp";
        }, 2000);
      });
    } catch (err) {
      
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

   /**============= Add to Cart ======= **/
    const AddToCartConfig = async (productId) => {
      try {
      await apiPostAuthorization(`customer/cart/item/add/${productId}`)
        .then((res) => {
          successNotification(res.data);
          console.log(res.data);
          setTimeout(() => {
            window.location.href = "/shopping-cart";
          }, 2000);
      })
        .catch((err) => {
          console.log(err.response.data.message);
          errorNotification(err.response.data.message);
        });
    } catch (err){
      console.log(err.response.data.message);
      }
    };


   /**============= Remove Item From Cart ======= **/
   const RemoveItemFromCartConfig = async (itemId) => {
    try {
    await apiDeleteAuthorization(`customer/cart/item/delete/${itemId}`)
      .then((res) => {
        successNotification(res.data);
        console.log(res.data);
        setTimeout(() => {
          window.location.href = "/shopping-cart";
        }, 2000);
    })
      .catch((err) => {
        console.log(err.response.data.message);
        errorNotification(err.response.data.message);
      });
  } catch (err){
    console.log(err.response.data.message);
    }
  };

     /**============= Increase Item Quantity in cart ======= **/
     const IncreaseItemQuantityConfig = async (productId) => {
      try{
        await apiPut(`customer/cart/item/add-to-quantity/${productId}`)
          .then((res) => {
            successNotification(res.data.message);
            console.log(res.data.message);
        })
          .catch((err) => {
            console.log(err.response.data.message);
            errorNotification(err.response.data.message);
          });
      } catch (err){
        console.log(err.response.data.message);
      }
    }

     /**============= Decrease Item Quantity in cart ======= **/
     const ReduceFromItemQuantityConfig = async (productId) => {
      try {
      await apiPut(`customer/cart/item/reduce-quantity/${productId}`)
        .then((res) => {
          successNotification(res.data.message);
          console.log(res.data.message);
      })
        .catch((err) => {
          console.log(err.response.data.message);
          errorNotification(err.response.data.message);
        });
    } catch (err){
      console.log(err.response.data.message);
      }
    };


    /**=============Get all Cart Items ======= **/
  const GetAllCartItems = async () => {
    try {
      await apiGetAuthorization(`customer/cart/view`).then((res) => {
        setCartItems(res.data);
        console.log(res.data);
      });
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

   /**============= Clear Cart ======= **/
   const ClearCartConfig = async () => {
    try {
    await apiDeleteAuthorization(`customer/cart/clear`)
      .then((res) => {
        successNotification(res.data);
        console.log(res.data);
    })
      .catch((err) => {
        console.log(err.response.data.message);
        errorNotification(err.response.data.message);
      });
  } catch (err){
    console.log(err.response.data.message);
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


  return (
    <dataContext.Provider
      value={{
        registerConfig,
        updateUserConfig,
        updatePasswordConfig,
        LoginConfig,
        Logout,
        GetUser,
        getUser,
        setGetUser,
        GetAddressbook,
        getAddressbook,
        CreateAddress,
        newAddress,
        AddToCartConfig,
        IncreaseItemQuantityConfig,
        ReduceFromItemQuantityConfig,
        cartItems,
        OTPConfig,
        ResendOTP,
        GetAllCartItems,
        RemoveItemFromCartConfig, 
        ClearCartConfig
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