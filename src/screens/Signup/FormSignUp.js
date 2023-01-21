import "./Signup.css";
import React, { useState } from "react";

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
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    date_of_birth: "",
    phoneNumber: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };


  return (
    <div className="signup_bg_image">
      {/* <Navbar /> */}
      <section className="signup_section">
        <div className="signregister">
          <div className="signup_col_1">
            <form
              id="form"
              className="signup_flex flex_col"
              // onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="signup_h2">Sign Up</h2>
              <p className="signup_span">Enter your personal details to create account</p>
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

              <input
                type="date"
                placeholder="Date of birth"
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
              <button className="signup_btn">Sign Up</button>
              <p className="signup_small mb-0">
                Already have an account?
                <a href="pages-login.html">Log in</a>
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
