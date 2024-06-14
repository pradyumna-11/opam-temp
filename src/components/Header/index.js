import "./index.css";

const Header = () => {
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718185704/327f0fa7e05733e7f22d51396ff821cb_y5iugk.png"
            alt="website logo"
          />

          <button type="button" className="nav-mobile-btn">
            Get A Quote
          </button>

          <button type="button" className="nav-mobile-btn">
            Product
          </button>
        </div>

        <div className="nav-bar-large-container">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718185704/327f0fa7e05733e7f22d51396ff821cb_y5iugk.png"
            alt="website logo"
          />

          <ul className="nav-menu">
            <li className="nav-menu-item">
              <a href="#sectionHome" className="link">
                Home
              </a>
            </li>

            <li className="nav-menu-item">
              <a href="#sectionAbout" className="link">
                About
              </a>
            </li>

            <li className="nav-menu-item">
              <a href="#sectionServices" className="link">
                Services
              </a>
            </li>

            <li className="nav-menu-item">
              <a href="#sectionPortfolios" className="link">
                Portfolios
              </a>
            </li>

            <li className="nav-menu-item">
              <a href="#sectionTeam" className="link">
                Team
              </a>
            </li>

            <li className="nav-menu-item">
              <a href="#sectionBlog" className="link">
                Blog
              </a>
            </li>

            <li className="nav-menu-item">
              <a href="#sectionContact" className="link">
                Contact
              </a>
            </li>
          </ul>
          <button type="button" className="logout-desktop-btn">
            Get A Quote
          </button>
          <button type="button" className="logout-desktop-btn">
            Product
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <a href="#sectionHome" className="link">
              <img
                src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718260178/1708979-200_qbtzss.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </a>
          </li>

          <li className="nav-menu-item-mobile">
            <a href="#sectionAbout" className="link">
              <img
                src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718260370/5759782-200_rdp75t.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </a>
          </li>

          <li className="nav-menu-item-mobile">
            <a href="#sectionServices" className="link">
              <img
                src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718260930/4235376-200_mrytvk.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </a>
          </li>

          <li className="nav-menu-item-mobile">
            <a href="#sectionPortfolios" className="link">
              <img
                src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718261268/6441181-200_egwa9k.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </a>
          </li>

          <li className="nav-menu-item-mobile">
            <a href="#sectionTeam" className="link">
              <img
                src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718261366/6571675-200_nsn0nm.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </a>
          </li>

          <li className="nav-menu-item-mobile">
            <a href="#sectionBlog" className="link">
              <img
                src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718261520/6731475-200_ulmxqz.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </a>
          </li>

          <li className="nav-menu-item-mobile">
            <a href="#sectionContact" className="link">
              <img
                src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718261652/5171448-200_chbqre.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
