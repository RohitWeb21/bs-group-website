import "./MoreAbout.scss";
const MoreAbout = () => {
  const hide = () => {
    const MoreAboutPage = document.getElementById("MoreAbout");
    document.getElementById("About_heading").style="visibility:visible"
    MoreAboutPage.style = "visibility: hidden";
  };
  return (
    <>
      <main className="MoreAbout " id="MoreAbout">
        <h2 className="AboutUs pt-5">About Us</h2>
        <hr />
        <a className="MoreAbout_hideBtn" onClick={hide}>
          <i className="fas fa-times fa-2x"></i>
        </a>
        <section className="container pt-5">
          
            <ul>
              <li>
                BS Group is a Social Media Management and Website Designing
                Company that caters to all your business needs. We are
                responsible for developing, implementing, and overseeing
                long-term Digital Marketing Campaigns as well as short-term
                advertising techniques and enhancing brand awareness, driving
                traffic to the company's website, and generating sales leads.
                Our team works on different areas of web design, including web
                graphic design; user interface design; authoring, including
                standardised code and proprietary software; and search engine
                optimization.
              </li>
              <br />
              <li>
                We specialise in Brand Management, Graphic Designing, Social
                Media Marketing, Web Designing, Domain Maintenance and Web
                Hosting, Search Engine Optimisation (SEO), & Content Creation.
              </li>
              <br />
              <li>
                The company creates and manages top-performing Social Media
                Handles for Facebook, LinkedIn, and Instagram BS Group works on
                brand core values which make a brand unique, superior,
                differentiated, valuable, and successful. We are responsible for
                developing a brand strategy for a company's target market and
                maintaining brand integrity across all company marketing
                initiatives and communications and may manage a portfolio of
                products.
              </li>
              <br />
              <li>
                We have specialised departments in which one of the departments
                is brand management, which determines the target audience, finds
                out the competitive environment, creates a logo and incorporates
                your logo across marketing channels. We handle dynamic website
                designing services with our unique and ultimate fine -quality
                designs.
              </li>
              <br />
              <li>
                With the utmost professionalism, BS Group provide high-quality
                designs and perfect services. For the convenience of our
                clients, we have an active support system through which you can
                contact us.
              </li>
              <br />
              <li>
                The main vision of the BS Group is "Coming together is a
                beginning, keeping together is progress, and working together is
                a success."
              </li>
              <br />
              <li>
                BS Group intends to generate employment at a steady rate. We aim
                to create a granular view of who needs help to keep their job
                and to equip the youth with the right opportunities by
                generating a productive workforce.
              </li>
              <br />
              <li>
                Earlier, the team started with one member, and now we have more
                than 100+ members.
              </li>
              <br />
              <li>
                The company has authorised as Registered LLP and as MSME under
                government of India. Moreover, it is also recognised as Startup
                under government of India.
              </li>
              <br />
              <li>
                It is the first company to tie up with Zomato for its employees'
                benefit. More than 2000+ designs have been created/flourished by
                our company and we are Constantly expanding new talent, we are
                on a hiring spree with rapid growth and entering different
                companies, such as Naya Gurukul, which is a trademark of BS
                GROUP.
              </li>
              <br />
              <li>
                We have recently been featured in one of the global magazines-
                Business Connect, within one year of getting into business. Our
                success speaks through our satisfied client base.
              </li>
            </ul>
        
        </section>
      </main>
    </>
  );
};
export default MoreAbout;
