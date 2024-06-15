import "./index.css";

const About = () => {
  return (
    <div className="about-main" id="sectionAbout">
      <div className="about-us">
        <div className="about-section1">
          <div className="xyz">
            <hr className="hr-line" />
            <hr className="hr-line1" />
            <h1 className="about-heading">ABOUT US</h1>
          </div>
          <h1 className="main-heading1">
            Over 4+ Years Helping Brands to Reach Full Potential
          </h1>
          <p className="description1">
            Over 4 years working in IT services developing software applications
            and mobile apps for clients all over the world.
          </p>
          <div className="num-section">
            <div>
              <h1 className="num">
                10<span className="plus-logo">+</span>
              </h1>
              <p>Happy Clients</p>
            </div>
            <div>
              <h1 className="num1">
                10<span className="plus-logo1">+</span>
              </h1>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="about-section-2">
          <div class="card-container">
            <img
              src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718253147/9ec3b4a0f9905e926d72ec7961165c10_blnfgo.png"
              alt="logo"
              className="icons"
            />
            <h1>High-quality Code</h1>
            <p>
              At vero eos et accusamus etiusto odio praesentium accusamus
              etiusto.
            </p>
          </div>
          <div class="card-container">
            <img
              src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718253696/04efad88a91ba5160d45ad44daea5ff4_fbbqub.png"
              alt="logo"
              className="icons"
            />
            <h1>Full-stack teams</h1>
            <p>
              At vero eos et accusamus etiusto odio praesentium accusamus
              etiusto.
            </p>
          </div>

          <div class="card-container">
            <img
              src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718253784/2d4a7a7ba1bbd15d0dde393ab6c9e5b7_ybb8q4.png"
              alt="logo"
              className="icons"
            />
            <h1>Agile Approach</h1>
            <p>
              At vero eos et accusamus etiusto odio praesentium accusamus
              etiusto.
            </p>
          </div>
          <div class="card-container">
            <img
              src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718253861/84272eb37f011c0bc7292734d0f25421_cg5pg7.png"
              alt="logo"
              className="icons"
            />
            <h1>Flexibility</h1>
            <p>
              At vero eos et accusamus etiusto odio praesentium accusamus
              etiusto.
            </p>
          </div>
        </div>
      </div>
      <div className="about-section-3">
        <img
          src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718254682/10f4a5cd63ba0db57562523aada5942d_mpsy6o.png"
          alt="logo"
          className="about-img"
        />
        <div className="skill-set">
          <div className="xyz">
            <hr className="skill-set-hr-line" />
            <hr className="skill-set-hr-line1" />
            <h1 className="skill-set-heading">SKILLSET</h1>
          </div>
          <h1>We Have the Hottest Skills to Hire For in 2024</h1>
          <div className="info">
            <div className="info-content">
              <p className="info-text">App Development</p>
              <p>92%</p>
            </div>
            <hr className="h-line" />
          </div>
          <div className="info">
            <div className="info-content">
              <p className="info-text">Website Development</p>
              <p>82%</p>
            </div>
            <hr className="h-line1" />
          </div>
          <div className="info">
            <div className="info-content">
              <p className="info-text">UI/UX & Graphics Design</p>
              <p>95%</p>
            </div>
            <hr className="h-line2" />
          </div>
          <div className="info">
            <div className="info-content">
              <p className="info-text">Digital Marketing</p>
              <p>95%</p>
            </div>
            <hr className="h-line3" />
          </div>
          <button className="start-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
