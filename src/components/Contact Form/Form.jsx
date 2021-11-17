import React, { useState } from "react";
import "./Form.css";
import FormValidation from "./FormValidation";
const Form = () => {
  const { handleInput, userValues, errors, handleSubmit } = FormValidation();

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="contact_form_inner_bg  "
        autoComplete="off"
      >
        <div className=" container col-12 d-flex flex-wrap align-content-center justify-content-center  ">
          <div className="First_last_name col-12 d-flex flex-wrap">
            <div className="col-md-6 col-12 text-center ">
              <input
                className="form_input_fill_name"
                type="text"
                name="firstName"
                autoComplete="off"
                value={userValues.firstName}
                placeholder=" First Name"
                onChange={handleInput}
                autoComplete="false"
             
              />
              {/* error massege */}
              {errors.firstName && (
                <label name="firstName" className="error-massage">
                  {errors.firstName && <span className="color-red"> * </span>}
                  {errors.firstName}
                </label>
              )}
            </div>

            {/* last name section  */}

            <div className="col-md-6 col-12 text-center ">
              <input
                className="form_input_fill_name"
                type="text"
                value={userValues.lastName}
                name="lastName"
                placeholder=" Last Name"
                onChange={handleInput}
                autoComplete="false"
              />
              {/* error massege */}
              {errors.lastName && (
                <label name="lastName" className="error-massage">
                  {errors.lastName && <span className="color-red"> * </span>}
                  {errors.lastName}
                </label>
              )}
            </div>
          </div>

          {/* contact Number section  */}

          <div className="Contact_Email_section">
            <div className="col-12">
              <input
                className="form_input_fill"
                type="Number"
                value={userValues.contactNumber}
                name="contactNumber"
                placeholder=" Contact No"
                onChange={handleInput}
                autoComplete="false"
                
              />
              {/* error massege */}
              <div className="error-massage">
                {errors.contactNumber && (
                  <label name="contactNumber" className="error-massage-2">
                    {errors.contactNumber && (
                      <span className="color-red"> * </span>
                    )}
                    {errors.contactNumber}
                  </label>
                )}
              </div>
            </div>

            {/* email section  */}

            <div className="col-12">
              <input
                className="form_input_fill"
                type="text"
                value={userValues.email}
                name="email"
                placeholder=" Email"
                onChange={handleInput}
                autoComplete="false"
              />
              {/* error massege */}
              <div className="error-massage">
                {errors.email && (
                  <label name="email" className="error-massage-2">
                    {errors.email && <span className="color-red"> * </span>}
                    {errors.email}
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* button section  */}

          <div className="button_div col-12 d-flex flex-wrap align-item-center justify-content-center">
            <button type="submit" className="button effect">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Form;
