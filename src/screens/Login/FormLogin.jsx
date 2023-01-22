import "./Login.css";
import React from 'react'

const Login = () => {



  return (
    <div className="login_bg_image">
      
       
            <form
              // id="form"
              className="loginForm "
            >
              <h2 className="login_h2">Login</h2>

              <input
                type="email"
                name="email"
                //  {...register("email")}
                placeholder="Email"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="password"
                required
              />

              <button className="login_btn">Login</button>
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



