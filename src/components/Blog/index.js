import "./index.css";

const Blog = () => {
  return (
    <>
      <div className="blog-section" id="sectionBlog">
        <img
          src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718267574/6e00b822dc84df0a7b318b0d3ab3e380_skdoh4.png"
          alt="blog-logo"
          className="blog-img"
        />
        <div className="testimonial-section">
          <div className="testimonial-xyz">
            <hr className="testimonial-hr-line" />
            <hr className="testimonial-hr-line1" />
            <h1 className="testimonial-heading">Testimonials</h1>
          </div>
          <h1 className="blog-heading">What Customer Saying</h1>
          <p className="blog-description">
            Over 4+ years working in IT services developing mobile apps,
            Websites for clients all over the world.
          </p>
          <div className="blog-container">
            <img
              src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718268235/17831d7ed051a3bfca0d750c71afc65c_zgtzrz.png"
              alt="quote-logo"
              className="quote-img"
            />
            <p className="logo-description">
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs from DevOps. Nanotechnology immersion along the
              information highway.
            </p>
            <div className="person-container">
              <img
                src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718268264/7918a139cb517e09e7ff3c9dd8b73041_sfdki4.png"
                alt="person-logo"
                className="person-img"
              />
              <div>
                <h3>Kabir Rashid</h3>
                <p>CEO, Keen IT Solution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
