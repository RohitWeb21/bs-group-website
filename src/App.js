import React from "react";
import Navbar from "./screen/Header/Navbar";
import Home from "./screen/Home/Home";
import About from "./screen/About/About";
import Services from "./screen/Services/Services";
// import Cards from "./components/cards/Cards";
import ContactForm from "./components/Contact Form/ContactForm";
import "./App.css";
function App() {
  window.addEventListener("scroll", () => {
    let Up_arrow = document.querySelector(".Up_Arrow");
    Up_arrow.classList.toggle("ScrollArrow_show", window.scrollY > 600);
  });
  return (
    <div className="App">
      {/* Navbar*/}
      <Navbar />
      <Home />
      <About />
      <Services />
      {/* <Cards /> */}
      <ContactForm />

      {/* Up_arrow  */}

      <a href="#navbar_Up">
        <div className="scroll_up_arrow Up_Arrow">
          <i className="fas fa-chevron-up fa-2x up_arrow_color"></i>
        </div>
      </a>
      {/* up arrow end  */}
    </div>
  );
}

export default App;
