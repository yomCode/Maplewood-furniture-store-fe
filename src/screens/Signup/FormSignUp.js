import "./Signup.css";
import React, { useState } from "react";
import { useAuth } from "../../context/authcontext";
import { message } from "antd";

// import styled from "./Signup.module.css"
//import bgImg from "../assets/img1.jpg";
//import { useForm } from "react-hook-form";

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);

// console.log(watch('username'));



const Signup = () => {
  const { registerConfig } = useAuth();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    date_of_birth: "",
    address: "",
    gender: "",
    phoneNumber: ""
  });
  

  

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerConfig(user);
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      date_of_birth: "",
      address: "",
      gender: "",
      phoneNumber: "",
    });
    // setFormData({})
  };

  return (
    <div className="signup_bg_image">
      {/* <Navbar /> */}
      <section className="signup_section">
        <div className="signregister">
          <div className="signup_col_1">
            <form
              // id="form"
              className="signupForm "
              // className="signup_flex flex_col"
              // onSubmit={handleSubmit(onSubmit)}
              onSubmit={handleSubmit}
            >
              <h2 className="signup_h2">Sign Up</h2>
              <p className="signup_span">
                Enter your personal details to create account
              </p>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                // {...register("firstname")}
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                required
                //  {...register("lastname")}
                placeholder="Last Name"
              />

              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                //  {...register("email")}
                placeholder="Email"
                required
              />

              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                // {...register("password")}
                placeholder="password"
                required
              />

              <select name="gender" value={user.gender} onChange={handleChange}>
                <option> Select Gender</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
                <option value="OTHER">OTHER</option>
              </select>

              <input
                type="date"
                placeholder="Date of birth"
                name="date_of_birth"
                value={user.date_of_birth}
                onChange={handleChange}
                // {...register("date")}
              />

              <input
                type="text"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleChange}
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
                onChange={handleChange}
                // {...register("address")}
                placeholder="Address"
                required
              />

              {/* {errors.mobile?.type === "required" && "Mobile Number is required"}
            {errors.mobile?.type === "maxLength" && "Max Length Exceed"} */}
              <button type="submit" className="signup_btn">
                Sign Up
              </button>
              <p className="signup_small mb-0">
                Already have an account?
                <a href="/login">Log in</a>
              </p>
            </form>
          </div>
          {/* <div className="signup_col-2">
          <img src={bgImg} alt="" />
        </div> */}
        </div>
      </section>
    </div>
  );
};

export default Signup;
