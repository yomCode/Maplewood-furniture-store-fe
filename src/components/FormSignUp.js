import React from "react";
import bgImg from "../assets/img1.jpg";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch('username'));
 const SaveUser = () => {

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Oakland Furnitures</h2>
          <span>Enter your personal details to create account</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              name="firstName"
              {...register("firstname")}
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              {...register("lastname")}
              placeholder="Last Name"
            />

            <input
              type="email"
              name="email"
              {...register("email")}
              placeholder="Email"
            />

            <input
              type="text"
              name="password"
              {...register("password")}
              placeholder="password"
            />

            <select class="form-control" name="gender">
              <option> Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <input type="date" name="date_of_birth" {...register("date")} />

            <input
              type="text"
              name="phoneNumber"
              {...register("mobile", {
                required: true,
                maxLength: 14,
                minLength: 11,
              })}
              placeholder="mobile number"
            />
           

            <input type="text" 
            name="address"
            {...register("address")} 
            placeholder="Address" />

            {/* {errors.mobile?.type === "required" && "Mobile Number is required"}
            {errors.mobile?.type === "maxLength" && "Max Length Exceed"} */}
            <button className="btn">Sign In</button>
            <p class="small mb-0">
              Already have an account?
              <a href="pages-login.html">Log in</a>
            </p>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
 };
}

