

import React, { useState } from "react";
import bgImg from "../assets/img1.jpg";
import { useForm } from "react-hook-form";
import SignUpService from "../services/SignUpService";

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);

  // console.log(watch('username'));
 const AddUser = () => {
     const [user, setUser] = useState({
       id: "",
       firstName: "",
       lastName: "",
       email:"",
       gender: "",
       date_of_birth: "",
       phoneNumber: "",
       address: "",
       password: "",
     });

    
     const handleChange = (e) =>{
         const value = e.target.value;
         setUser({...user,[e.target.name]:value});
     }
    const saveUser = (e) =>{
    e.preventDefault();
    SignUpService.saveUser(user)
    .then((response)=>{

        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    
      });
    };




  return (
    <div className="bg-image">
      <section>
        <div className="register">
          <div className="col-1">
            <form
              id="form"
              className="flex flex-col"
              // onSubmit={handleSubmit(onSubmit)}
            >
              <h2>Oakland Furnitures</h2>
              <span>Enter your personal details to create account</span>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={(e) => handleChange(e)}
                // {...register("firstname")}
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={(e) => handleChange(e)}
                required
                //  {...register("lastname")}
                placeholder="Last Name"
              />

              <input
                type="email"
                name="email"
                value={user.email}
                onChange={(e) => handleChange(e)}
                //  {...register("email")}
                placeholder="Email"
                required
              />

              <input
                type="password"
                name="password"
                value={user.password}
                onChange={(e) => handleChange(e)}
                // {...register("password")}
                placeholder="password"
                required
              />

              <select
                name="gender"
                value={user.gender}
                onChange={(e) => handleChange(e)}
              >
                <option> Select Gender</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
                <option value="OTHER">OTHER</option>
              </select>

              {/* <input
              type="text"
              name="gender"
              value={user.gender}
              onChange={(e) => handleChange(e)}
              //  {...register("lastname")}
              placeholder="Gender"
            /> */}
              <label > Date of birth </label>
              <input
                type="date"

                name="date_of_birth"
                value={user.date_of_birth}
                onChange={(e) => handleChange(e)}
                // {...register("date")}
              />
             

              <input
                type="text"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={(e) => handleChange(e)}
                //   {...register("mobile", {
                //     required: true,
                //     maxLength: 14,
                //     minLength: 11,
                //   })}
                required
                placeholder="mobile number"
              />

              <input
                type="text"
                name="address"
                value={user.address}
                onChange={(e) => handleChange(e)}
                // {...register("address")}
                placeholder="Address"
                required
              />

              {/* {errors.mobile?.type === "required" && "Mobile Number is required"}
            {errors.mobile?.type === "maxLength" && "Max Length Exceed"} */}
              <button onClick={saveUser} className="btn">
                Sign Up
              </button>
              <p className="small mb-0">
                Already have an account?
                <a href="pages-login.html">Log in</a>
              </p>
            </form>
          </div>
          {/* <div className="col-2">
          <img src={bgImg} alt="" />
        </div> */}
        </div>
      </section>
    </div>
  );
 };

export default AddUser;

