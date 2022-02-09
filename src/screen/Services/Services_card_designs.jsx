// import graphics_img from "../../images/graphics.gif";
import AOS, { init } from "aos";
import "aos/dist/aos.css";
const Services_card_designs = (props) => {
  AOS.init({
    offset: 150,
    duration: 500,
    easing: "ease-in-sine",
    delay: 100,
  });
  return (
    <>
      <main className="services_card_designs container " data-aos="fade-up">
        <h3 className="p-4 fs-2 col-lg-6 col-sm-12">{props.heading}</h3>
        <section className="main_design_section row">
          <section className="pera_section  col-lg-6 col-sm-12">
            <p className="col-10 services_pera">{props.pera}</p>
            <div className="button-div">
              <button className="card-btn-link">
                <a href="#" className="btn-link-css my-css">
                  Find out more <i className="fa fa-chevron-right"></i>
                  <i className="fa fa-chevron-right right_arrow_position"></i>
                </a>
              </button>
            </div>
          </section>
          <section className="services_img_section col-lg-6 col-sm-12">
            <img src={props.img} alt="" />
          </section>
        </section>
      </main>
    </>
  );
};
export default Services_card_designs;
