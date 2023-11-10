import React from "react";
import { BiLogIn } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, RESET } from "../../redux/features/auth/authSlice";
import { ShowOnLogin, ShowOnLogout } from "../protect/hiddenLink";
import { UserName } from "../../pages/profile/Profile";

const activeLink = ({ isActive }) => (isActive ? "active" : "");

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goHome = () => {
    navigate("/");
  };

  const logoutUser = async () => {
    dispatch(RESET());
    await dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-bottom skewBg" data-header="">
        <div className="container">
          <div className="logo" onClick={goHome}>
            <BiLogIn size={35} />
            <span>Gamics</span>
          </div>
          <nav className="navbar" data-navbar="">
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="/" className="navbar-link skewBg" data-nav-link="">
                  Home
                </a>
              </li>
              <li className="navbar-item">
                <a href="#blog" className="navbar-link skewBg" data-nav-link="">
                  Blog
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link skewBg" data-nav-link="">
                  Contact
                </a>
              </li>
              <ShowOnLogin>
                <li className="navbar-item">
                  <FaUserCircle size={20} />
                  <UserName />
                </li>
              </ShowOnLogin>
              <ShowOnLogout>
                <li>
                  <button className="navbar-item">
                    <Link to="/login">Login</Link>
                  </button>
                </li>
              </ShowOnLogout>
              <ShowOnLogin>
                <li>
                  <NavLink to="/profile" className={activeLink}>
                    Profile
                  </NavLink>
                </li>
                <li>
                  <button onClick={logoutUser} className="navbar-item">
                    Logout
                  </button>
                </li>
              </ShowOnLogin>
            </ul>
          </nav>
          <div className="header-actions">
            <button
              className="search-btn"
              aria-label="open search"
              data-search-toggler=""
            >
              <ion-icon name="search-outline" />
            </button>
            <button
              className="nav-toggle-btn"
              aria-label="toggle menu"
              data-nav-toggler=""
            >
              <ion-icon name="menu-outline" className="menu" />
              <ion-icon name="close-outline" className="close" />
            </button>
          </div>
        </div>
      </div>
    </header>

  );
};

export default Header;
