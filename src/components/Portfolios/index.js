import "./index.css";

const Portfolios = () => (
  <div className="portfolios-page" id="sectionPortfolios">
    <div className="portfolios-page-inner">
      <img
        src="https://res.cloudinary.com/daxizvsge/image/upload/v1717916077/Screenshot_2024-06-09_122237_umka2x.png"
        alt="page-4-img"
        className="portfolios-page-img"
      />
      <div className="portfolios-page-inner-2-section">
        <div className="portfolios-page-inner-2-section-top">
          <img
            src="https://res.cloudinary.com/daxizvsge/image/upload/v1717916076/Screenshot_2024-06-09_122249_owlm6z.png"
            className="bar-img"
            alt="bar-img"
          />
          <p className="why-choose-us-text">WHY CHOOSE US</p>
        </div>
        <h3 className="portfolios-page-inner-2-section-heading">
          We create Result-Oriented Dynamic Applications.
        </h3>
        <p className="portfolios-page-inner-2-section-description">
          Over 25 years working in IT services developing software applications
          and mobile apps for clients all over the world.
        </p>
        <div className="portfolios-page-inner-2-cards-container">
          <div className="portfolios-page-inner-2-card">
            <img
              src="https://res.cloudinary.com/daxizvsge/image/upload/v1717916077/Screenshot_2024-06-09_122309_w7wkvn.png"
              alt="page-4-card-img"
              className="portfolios-page-card-img"
            />
            <div className="portfolios-page-inner-2-card-contents">
              <h3 className="portfolios-page-inner-2-card-heading">
                First Growing Process{" "}
              </h3>
              <p className="portfolios-page-inner-2-card-description">
                At vero eos et accusamus etiusto odio prasentium
              </p>
            </div>
          </div>

          <div className="portfolios-page-inner-2-card">
            <img
              src="https://res.cloudinary.com/daxizvsge/image/upload/v1717916078/Screenshot_2024-06-09_122317_gampyz.png"
              alt="page-4-card-img"
              className="portfolios-page-card-img"
            />
            <div className="portfolios-page-inner-2-card-contents">
              <h3 className="portfolios-page-inner-2-card-heading">
                Clean Code
              </h3>
              <p className="portfolios-page-inner-2-card-description">
                At vero eos et accusamus etiusto odio prasentium
              </p>
            </div>
          </div>

          <div className="portfolios-page-inner-2-card">
            <img
              src="https://res.cloudinary.com/daxizvsge/image/upload/v1717916079/Screenshot_2024-06-09_122337_sfpvoi.png"
              alt="page-4-card-img"
              className="portfolios-page-card-img"
            />
            <div className="portfolios-page-inner-2-card-contents">
              <h3 className="portfolios-page-inner-2-card-heading">
                Well Documentation
              </h3>
              <p className="portfolios-page-inner-2-card-description">
                At vero eos et accusamus etiusto odio prasentium
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Portfolios;
