import "./Services.scss";
import Services_card_designs from "./Services_card_designs";
import data from "./data";
const Services = () => {
  return (
    <>
      <main className="services_main py-5">
        <section className="services">
          <h2 className="services_heading" id="services">
            Services
          </h2>

          <section className="design">
            {data.graphics.map((cre) => {
              return (
                <>
                  <Services_card_designs
                    id={cre.id}
                    heading={cre.head}
                    pera={cre.para}
                    img={cre.img}
                  />
                </>
              );
            })}
          </section>
        </section>
      </main>
    </>
  );
};
export default Services;
