import React from "react";
import logo from "../../images/bs_group_logo2.png";
// import ContactBg from "../images/ContactBg.jpg";
import Form from "./Form";
import "./Contact.css";
const ContactForm = () => {
  return (
    <React.Fragment>
      <section className="contact_form_main_section d-flex flex-wrap" id="Contact">
        <div className="contact_heading_div col-12">
        
          <h2 className="contact_heading text-center">
            <span className="contact_us_Font_size"> Contact Us</span>{" "}
          </h2>
          <div className="col-12 ">
        
              <img src={logo} alt="" className="bs_logo_bg" />
              <span className="bs_logo_text">
                <span className="text_white_bs"> Bs </span>
                <span className="text_blue_group">Group</span>
              </span>
           
          </div>
        </div>
        {/* form section  */}
        <div className="contact_form_main_div">
          <Form />
        </div>
      </section>
    </React.Fragment>
  );
};
export default ContactForm;
