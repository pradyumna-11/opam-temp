import Header from "../Header";

import "./index.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="body-section">
        <div className="body-content" id="sectionHome">
          <img
            src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718200772/e64270625668f8bbc41650650d8c4f3c_kgaaun.png"
            className="home-mobile-img-logo"
            alt="img-logo"
          />
          <h1 className="main-heading">Software Solutions, Tailored For You</h1>
          <p className="description">
            We are leading technology solutions providing company all over the
            world.
          </p>
          <button className="start-btn">Get Started</button>
        </div>
        <img
          src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718200772/e64270625668f8bbc41650650d8c4f3c_kgaaun.png"
          className="home-desktop-img-logo"
          alt="img-logo"
        />
      </div>
    </>
  );
};

export default Home;
