import "./Navbar.scss";
import navLogo from "./../../assets/nav-logo.svg";
import profile from "./../../assets/nav-profile.svg";
const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <img src={navLogo} alt="logo" className="header__logo-img" />
          </div>
          <div className="header__profile">
            <img
              className="header__profile-user"
              src={profile}
              alt="user-image"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
