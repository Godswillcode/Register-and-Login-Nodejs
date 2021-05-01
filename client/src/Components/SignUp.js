import { NavLink } from "react-router-dom";
import "./login.css";
import { SignUpInputs } from "./inputs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function SignUp() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
      }, []);

  return (
    <div className="container">
      <div className="form-container d-flex justify-content-center">
        <div className="form-wrap shadow" data-aos="zoom-in">
          <div className="form-title text-center">
            <h2>Create Account</h2>
          </div>
          <form className="form">
            {SignUpInputs.map((signUpInput, key) => {
              return (
                <div key={key}>
                  <div className="wrap-input">
                    <input
                      type={signUpInput.type}
                      name={signUpInput.name}
                      placeholder={signUpInput.placeholder}
                      className="input"
                    />
                    <span className="focus-input"></span>
                  </div>
                </div>
              );
            })}
            <div className="form-check text-left ml-3 pt-3">
              <input
                type="checkbox"
                name="termsYes"
                className="form-check-input"
                required
              />
              <label className="form-check-label">
                Accept the terms of use &amp; private policy
              </label>
            </div>
            <div className="btn-submit-wrap d-flex justify-content-center">
              <button type="submit" className="btn btnSubmit">
                Submit
              </button>
            </div>
          </form>

          <p>
            Have an account already?{" "}
            <NavLink to="/login" className="pl-1">
              <b>Log-In</b>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
