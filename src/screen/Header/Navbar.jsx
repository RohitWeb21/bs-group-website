import React from "react";
import "./Navbar.css";
// import BsLogo from "../../images/bs_group_logo.png"

const Navbar = () => {

  const openNav=()=> {
    document.getElementById("mySidebar").style.width = "100%";
    // document.getElementById("main").style.marginLeft = "250px";
  }
  
  const closeNav=()=> {
    document.getElementById("mySidebar").style.width = "0%";
    // document.getElementById("main").style.marginLeft= "0";
    console.log("hello world")
  }

 


  return (
    <>
    <div id="mySidebar" className="sidebar">
  <button href="" className="closebtn" onClick={closeNav}>×</button>
  <a href="#home" onClick={closeNav}>Home</a>
  <a href="#" onClick={closeNav}>About</a>
  <a href="#Cards"onClick={closeNav}>Services</a>
  <a href="#" onClick={closeNav}>Clients</a>
  <a href="#Contact" onClick={closeNav}>Contact</a>
</div>

    <section  id="navbar_Up" >
      <nav className="navbar navbar-expand-lg navbar-light  Navbar_bg">
        <div className="container-fluid ">
         <a className="navbar-brand" href="#">
          
         </a> 
        
              <div id="main">
              <button className="openbtn" onClick={openNav}>☰ </button>  
             
          </div>
        </div>
      </nav> 
      </section>
    </>
  );
};

export default Navbar;
