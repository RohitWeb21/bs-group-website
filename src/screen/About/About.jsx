import "./About.scss";
import MoreAbout from "./MoreAbout";
import bsCeo from "../../images/pp.jfif";

const About = () => {
  const show = () => {
    const Page = document.getElementById("MoreAbout");
    Page.style = "visibility: visible";
    document.getElementById("About_heading").style = "visibility: hidden;";
    console.log("i am clicked");
  };
  return (
    <>
      <main className="About ">
        <section className="About_inner">
          <h2 className="About_heading" id="About_heading">
            About
          </h2>

          <section className="container d-flex flex-wrap">
            <section className="About_img_section col-sm-12 col-lg-6 pad1">
              <img
                src={bsCeo}
                alt="Bs Group CEO Image "
                className="About_img"
              />
            </section>

            <p className="about_pera  col-lg-6 col-sm-10 pt-5 ">
              <strong className="About_pera_tittle">
                {" "}
                BS Group -Perfection is our Tradition.
              </strong>
              <br />
              <br />
              BS Group is a Social Media Management and Website Designing
              Company that caters to all of your business needs. We are
              responsible for developing, implementing, and overseeing long-term
              Digital arketing campaigns as well as short-term advertising
              techniques and enhancing brand awareness, driving traffic to the
              company's website, and generating sales leads. Our team works on
              different areas of Web Design, including Web Graphic Design; User
              Interface Design; authoring, including standardized code and
              proprietary software; and Search Engine Optimization. The company
              creates and manages top-performing Social Media handles for Brands
              on Facebook, Linked In, and Instagram.
              <br />
              To know more &nbsp;
              <a
                href="#hello"
                className="About_more_arrow"
                id="clickHere"
                onClick={show}
              >
                Click here
                <span className="About_more_arrow_animation">
                  <i className="fas fa-chevron-right "></i>
                  <i className="fas fa-chevron-right "></i>
                </span>
              </a>
            </p>
          </section>
        </section>
        {/* More About Section start */}

        <MoreAbout />
      </main>
    </>
  );
};
export default About;
