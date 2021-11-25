import React from "react";
import "./Home.css";
import BsLogo from "../../images/bs_group_logo.png";
const Home = () => {
  window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    header.classList.toggle("Navbar_logo_size", window.scrollY > 10);
    let Up_arrow = document.querySelector(".Up_Arrow");
    Up_arrow.classList.toggle("ScrollArrow_show", window.scrollY > 600);
    let showData = document.querySelector(".Home_main_data");
    showData.classList.toggle("Show_home_data", window.scrollY > 10);
    let home_content_after_scroll = document.querySelector(".Home_content");
    home_content_after_scroll.classList.toggle(
      "home_content_after_scroll_size",
      window.scrollY > 10
    );
  });
  return (
    <>
    <main className="Home">
      <section className="Main_home_section " id="home">
        <div className="Home_content">
          <a className="navbar-brand" href="#">
            <img
              src={BsLogo}
              className="Navbar_logo Navbar_logo_position ms-3  header"
            />
          </a>
        </div>
        <section className="Home_main_data d-flex flex-wrap">
          <div className="perfection_headding col-lg-6 col-md-12 pt-5 ">
            <h2>
              Perfection
              <br /> is our
              <br />
              <span> tradition.</span>
            </h2>
          </div>
          <div className="video_div col-lg-6  col-md-12 pt-5">
            <video width="500" height="450" loop autoplay muted controls>
              <source
                src="https://video.wixstatic.com/video/24306f_a35e63e0fc054f59a89279ab95a52051/720p/mp4/file.mp4
"
                type="video/mp4"
              />
              Your browser does not support the video.
            </video>
          </div>
        </section>
      </section>
      </main>
    </>
  );
};
export default Home;
//
