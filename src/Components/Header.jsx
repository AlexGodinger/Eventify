import React from 'react';
import { NavLink } from 'react-router-dom'; // ייבוא NavLink מספרייה
import '../Style/Style.css';

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="container logo">
        <div className="text-center p-0">
          <img src="images/Free_Sample_By_Wix (1).jpg" height="100px" alt="logo" />
        </div>
        <div className="d-flex justify-content-center col-sm-12 rounded-5">
          <div className="d-flex justify-content-center bg-white rounded-5">
            <nav className="navbar navbar-expand-md bg-body-tertiary rounded-5 ">
              <div className="container-fluid ">
                <NavLink className="line navbar-brand" to="/" style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '2em' }}>EVENTIFY</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                  <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll fs-5 fs-md-3" style={{ '--bs-scroll-height': '100px', fontFamily: "'Ephesis', 'Montserrat', 'Roboto', 'Roboto Condensed', 'Water Brush', cursive" }}>
                    <li className="nav-item">
                      <NavLink className="  nav-link line"  to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="  nav-link line"  to="/gallery">Our productions</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="  nav-link line"  to="/info">Info</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="  nav-link line"  to="/aboutUS">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="  nav-link line"  to="/Project">Menu</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="  nav-link line"  to="/contactUs">Contact us</NavLink>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
