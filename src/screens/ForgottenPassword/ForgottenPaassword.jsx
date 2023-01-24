import "./ForgottenPassword.css";
import React, { useState } from "react";
import { useAuth } from "../../context/authcontext";

const Forgotten = () => {
  const { ForgottenConfig } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ForgottenConfig(formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="forgotten_bg_image">
      <form
        // id="form"
        className="forgottenForm"
        onSubmit={handleSubmit}
      >
        <h2 className="forgotten_h3">Forgot your password?</h2>

        <input
          type="email"
          name="email"
          //  {...register("email")}
          placeholder="Email"
          required
          onChange={handleChange}
        />

        <button className="forgotten_btn" type="submit">
          Reset my password
        </button>

        <p className="forgotten_small mb-0">
          Don't have an account ?<a href="/signup">Sign up</a>
        </p>
        <p className="forgotten_small mb-0">
          Already have an account ? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Forgotten;
