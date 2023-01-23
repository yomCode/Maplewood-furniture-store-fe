import "./Login.css";
import React, { useState } from 'react';
import { useAuth } from "../../context/authcontext";

const Login = () => {

  const { LoginConfig } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginConfig(formData);
    setFormData({
      email: "",
      password: "",
    });
  };


  return (
    <div className="login_bg_image">
      <form
        // id="form"
        className="loginForm "
        onSubmit={handleSubmit}
      >
        <h2 className="login_h2">Login</h2>

        <input
          type="email"
          name="email"
          //  {...register("email")}
          placeholder="Email"
          required
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={handleChange}
        />

        <button className="login_btn" type="submit">Login</button>
        <p className="login_small mb-0">
          <a href="/forgotpassword">Forgotten password?</a>
        </p>

        <p className="login_small mb-0">
          Don't have an account ?<a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Login



