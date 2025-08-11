import React from 'react'
import SocialLinks from "./SocialLinks";
import PageLinks from "./PageLinks";

const Footer = () => {
  return (
    <footer className="footer">
            <div className="footer-menu">
                <PageLinks groupName='menu-list' itemName='menu-item' />
            </div>
            <div className="footer-icon-menu">
                <SocialLinks />   
            </div>
            <p>Copyright &copy; <span id="date">{new Date().getFullYear()}</span> All Rights Reserved</p>
    </footer>
  );
};

export default Footer