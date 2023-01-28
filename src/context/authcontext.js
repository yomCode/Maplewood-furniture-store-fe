import React, { createContext } from "react";
import {
  apiDelete,
  apiGet,
  apiGetAuthorization,
  apiPost,
  apiPostAuthorization,
  apiPut,
  apiDeleteAuthorization
} from "../utils/api/axios";
import {
  errorNotification,
  successNotification,
} from "../components/Notification";


export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [getUser, setGetUser] = React.useState({});
  const [getWallet, setGetWallet] = React.useState({});
  const [getAddressbook, setGetAddressbook] = React.useState([]);
  const [getIsDefault, setIsDefault] = React.useState(false);
  const [getAddress, setGetAddress] = React.useState({});
  const [newAddress, setNewAddress] = React.useState({});

  const [cartItems, setCartItems] = React.useState(null);
  const [verifyReg, setVerifyReg] = React.useState({});
  const [getTransDetail, setGetTransDetail] = React.useState({});
  const [getWalletDetails, setGetWalletdetails] = React.useState({});

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


 const ForgottenConfig = async (formData) => {
   try {
     const registerData = { 
       email: formData.email,
     };
     await apiPost("auth/forgot-password-request", registerData).then((res) => {
       successNotification(res.data);
       //toast.success(res.data.data);
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
          localStorage.setItem("role", "CUSTOMER");
          setTimeout(() => {
            window.location.href = "/shop";
          }, 1500);
        })
        .catch((err) => {
          console.log(err.response.data);
          errorNotification(err.response.data);
        });
    } catch (err) {
      console.log(err.response.data.message);
      errorNotification(err.response.data.message);
    }
  };

   /**============= Add to Cart ======= **/
    const AddToCartConfig = async (productId, data) => {
      try {
      await apiPostAuthorization(`customer/cart/item/add/${productId}`, data)
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
            const index = cartItems.items.findIndex(item=>item.product.id === productId)
            setCartItems(prev=>{
              prev.items[index].orderQty = prev.items[index].orderQty + 1
              return prev;
            });
            setTimeout(() => {
              window.location.href = "/shopping-cart";
            }, 2000);
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
          setTimeout(() => {
            window.location.href = "/shopping-cart";
          }, 2000);
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
        console.log("cart",res.data.items);
        
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
        setTimeout(() => {
          window.location.href = "/addressbook";
        }, 500);
      })
    }catch(err){
      errorNotification(err.response.data)
      console.log(err.response.data)
    }
  }

  /**=============Get Addressbook ======= **/
  const GetAddressbook = async () => {
    try {
      await apiGetAuthorization("address/get").then((res) => {
        setGetAddressbook(res.data);
        console.log(res.data);
        
      });
    } catch (err) {
      console.log(err);
    }
  };

  // =================Get Address=================================

  const GetAddress = async (id) => {
    try{
      await apiGetAuthorization(`address/view?id=${id}`).then((res) => {
        setGetAddress(res.data)
        console.log(res.data)
      })
    }catch(err) {
      console.log(err.response.data)
    }
  }

 // =================Delete Address=================================

    const DeleteAddress = (id) => {
      try{
        apiDelete(`address/delete?id=${id}`).then((res) => {
          successNotification(res.data)
          console.log(res.data)
        })
      }catch(err){
        errorNotification(err.response.data)
        console.log(err.response.data)
      }
    }

    // =================Update Address=================================

    const UpdateAddress = async (id, formData) => {
      const addressData = {
        fullName: formData.fullName,
        phone: formData.phone,
        emailAddress: formData.emailAddress,
        street: formData.street,
        state: formData.state,
        country: formData.country
      }
      try{
        await apiPut(`address/update?id=${id}`, addressData).then((res) => {
          successNotification(res.data);
          console.log(res.data)
        })
      }catch(err) {
        errorNotification(err.response.data);
        console.log(err.response.data)
      }
      setTimeout(() => {
        window.location.href = "/addressbook";
      }, 500);
    }

// ====================Set Default======================

const SetDefault = (id) => {
  try{
    apiGetAuthorization(`address/setDefault?id=${id}`).then((res) => {
      setIsDefault(res.data)
      console.log(res.data)
      successNotification(res.data)
    })
  }catch(err){
    errorNotification(err.response.data)
    console.log(err.response.data)
  }
}

// ====================Process Payment======================

const ProcessPayment = async (formData) => {
  const paymentForm = {
    amount: formData.amount
  }

  try{
    await apiPostAuthorization('pay', paymentForm).then((res) => {
      setTimeout(() => {
        window.location.href = res.data.data.authorization_url;
      }, 1500);
    })
  }catch(err){
    errorNotification(err.response.data)
    console.log(err.response.data)
  }
  
}


// ====================Confirm Payment======================

const FinalizePayment = async (reference) => {
  try{
    await apiGet(`finalizeTrans?reference=${reference}`).then((res) => {
      setGetTransDetail(res.data)
      console.log(res.data)
    })

  }catch(err){
    setGetTransDetail(err.response.data)
    console.log(err.response.data)
  }
}


// ====================Get Wallet Info======================

const WalletDetails = async () => {
  try{
    await apiGetAuthorization('customer/wallet/info').then((res) => {
      setGetWalletdetails(res.data.data);
      console.log(res.data.data);
    })
  }catch(err){
    console.log(err.response.data)
  }
}



  // ====================VerifyRegistration======================

  const VerifyReg = async (token) => {
    try{
      await apiGet(`customer/verifyRegistration?${token}`).then((res) => {
        setVerifyReg(res.data)
        console.log(res.data)
      })

    }catch(err){
      setVerifyReg(err.response.data)
      console.log(err.response.data)
    }
  }


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
        AddToCartConfig,
        IncreaseItemQuantityConfig,
        ReduceFromItemQuantityConfig,
        cartItems,
        OTPConfig,
        ResendOTP,
        GetAllCartItems,
        RemoveItemFromCartConfig, 
        ClearCartConfig,
        verifyReg,
        VerifyReg,
        GetAddress,
        setGetAddress,
        getAddress,
        DeleteAddress,
        UpdateAddress,
        SetDefault,
        getIsDefault,
        ProcessPayment,
        FinalizePayment,
        getTransDetail,
        getWalletDetails,
        WalletDetails
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