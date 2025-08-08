import React, { useState } from 'react';
import logo from "/src/assets/forestlogo1.png";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";

const Navbar = () => {
    const [isToggle, setToggle] = useState(false);
    const handleToggle = () => {
        console.log(isToggle);
        setToggle(!isToggle);
    };
  return (
  <nav className="navbar">
        <div className="container navbar-flex">
            <img src={logo} alt="" className="logo"/>
{/* <!-- desktop menu --> */}
            <div className="main-menu">
            <PageLink groupName='menu-list' itemName='menu-item' />
            </div>
            <div className="icon-menu">
            <SocialLink />   
            </div>
{/* <!-- mobile menu --> */}
            <div className="mobile-menu">
                <div className="mobile-menu-toggle" onClick={handleToggle}>
                    <i className="fa-solid fa-bars fa-2x"></i>
                </div>
                <div className={isToggle ? "mobile-menu-items active" : "mobile-menu-items"}>
                <PageLink groupName='mobile-menu-list' itemName='mobile-menu-item' />
                </div>
            </div>
        </div>
    </nav>
  );
};
export default Navbar;