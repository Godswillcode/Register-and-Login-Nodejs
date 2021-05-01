import { LoginInputs } from "./inputs";
import "./login.css";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Login() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="container">
      <div className="form-container d-flex justify-content-center mt-5">
        <div className="form-wrap shadow" data-aos="fade-up">
          <div className="form-title text-center">
            <h2>Log In</h2>
          </div>
          <form id="clearLogin" className="form">
            {LoginInputs.map((loginInput, key) => {
              return (
                <div key={key}>
                  <div className="wrap-input">
                    <input
                      type={loginInput.type}
                      name={loginInput.name}
                      placeholder={loginInput.placeholder}
                      className="input"
                    />
                    <span className="focus-input"></span>
                  </div>
                </div>
              );
            })}

            <div className="btn-submit-wrap d-flex justify-content-center">
              <button type="submit" className="btn btnSubmit">
                Submit
              </button>
            </div>
          </form>

          <p>
            Don't have account?{" "}
            <NavLink to="/" className="pl-1">
              <b>Sign Up</b>
            </NavLink>
          </p>
          <p>
            <a href="#!"> Forgot your password?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
