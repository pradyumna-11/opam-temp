import "./index.css";

const Services = () => (
  <div className="services-page" id="sectionServices">
    <a href="/" className="services-link">
      Services
    </a>
    <div className="services-page-top">
      <h2 className="services-page-heading">
        What Solutions We Provide to Our Valued Customers
      </h2>
      <button className="get-start-button" type="button">
        Get Started
      </button>
    </div>
    <div className="services-page-cards-container">
      <div className="services-page-card">
        <div className="card-start-container">
          <img
            src="https://res.cloudinary.com/daxizvsge/image/upload/v1717913821/Screenshot_2024-06-09_114304_ahq13f.png"
            alt="card-img"
            className="card-img"
          />
          <p className="card-count">01</p>
        </div>
        <h3 className="card-heading">App Development</h3>
        <p className="card-description">
          Crafted with precision,our apps blend functionality with
          elegance,ensuring seamless user experience across platforms.
        </p>
      </div>

      <div className="services-page-card">
        <div className="card-start-container">
          <img
            src="https://res.cloudinary.com/daxizvsge/image/upload/v1717913821/Screenshot_2024-06-09_114328_ct8dz4.png"
            alt="card-img"
            className="card-img"
          />
          <p className="card-count">02</p>
        </div>
        <h3 className="card-heading">Web Development</h3>
        <p className="card-description">
          Elevate the online presence with custom-built websites tailored to
          your brand's needs,captivating visitors and diving engagement.
        </p>
      </div>

      <div className="services-page-card">
        <div className="card-start-container">
          <img
            src="https://res.cloudinary.com/daxizvsge/image/upload/v1717913821/Screenshot_2024-06-09_114344_fkufdv.png"
            alt="card-img"
            className="card-img"
          />
          <p className="card-count">03</p>
        </div>
        <h3 className="card-heading">UI/UX & Graphics Design</h3>
        <p className="card-description">
          From stunning visuals to intuitive interfaces, our design solutions
          captivate audiences and enhance user experiences,setting your brand
          apart.
        </p>
      </div>

      <div className="services-page-card">
        <div className="card-start-container">
          <img
            src="https://res.cloudinary.com/daxizvsge/image/upload/v1717913821/Screenshot_2024-06-09_114405_vvodp3.png"
            alt="card-img"
            className="card-img"
          />
          <p className="card-count">04</p>
        </div>
        <h3 className="card-heading">Logo Desigining</h3>
        <p className="card-description">
          Make a lasting impression with a unique logo that encapsulates your
          brand identity,crafted with creativity and precision to stand out in
          any market.
        </p>
      </div>

      <div className="services-page-card">
        <div className="card-start-container">
          <img
            src="https://res.cloudinary.com/daxizvsge/image/upload/v1717913821/Screenshot_2024-06-09_114528_mets8u.png"
            alt="card-img"
            className="card-img"
          />
          <p className="card-count">05</p>
        </div>
        <h3 className="card-heading">Digital Marketing</h3>
        <p className="card-description">
          Our strategic digital campaigns amplify your brand's reach, diving
          meaningful connectons and conversions in the ever-evolving digital
          landscape.
        </p>
      </div>

      <div className="services-page-card">
        <div className="card-start-container">
          <img
            src="https://res.cloudinary.com/daxizvsge/image/upload/v1717913821/Screenshot_2024-06-09_114545_isvony.png"
            alt="card-img"
            className="card-img"
          />
          <p className="card-count">06</p>
        </div>
        <h3 className="card-heading">Shopify Development</h3>
        <p className="card-description">
          Seamlessly scale your online store with our Shopify
          solutions,empowering e-commerce success through intuitive design and
          robust features.
        </p>
      </div>
    </div>
  </div>
);

export default Services;
