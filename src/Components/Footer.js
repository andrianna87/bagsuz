import React from 'react';
import '../styles/global.css';
import '../styles/Footer.css';
import {NavLink} from "react-router-dom";
import BagsuzLogo from "../icons/BagsuzLogo";

const logoStyle = {
    width: '100px',
    height: '100px',
    paddingRight: '0',
    paddingTop: '1%'
};

const Footer = () => {
    return (
        <div>
            <div className="footerContainer">
                <div className="footerDetails">
                    <NavLink to="/">
                        <BagsuzLogo style={logoStyle} />
                        <p className="logoName">BAGSUZ</p>
                    </NavLink>
                </div>
                <div className="footerDetails">
                    <h2>Bagsuz</h2>
                    <NavLink to="/shop" activeClassName="is-active" exact={true} className="footerLink">
                        <p>Shop</p>
                    </NavLink>
                    <NavLink to="/about" activeClassName="is-active" exact={true} className="footerLink">
                        <p>About</p>
                    </NavLink>
                </div>
                <div className="footerDetails">
                    <h2>Customer Support</h2>
                    <NavLink to="/terms-of-use" activeClassName="is-active" exact={true} className="footerLink">
                        <p>Terms &#38; Conditions</p>
                    </NavLink>
                    <NavLink to="/contact" activeClassName="is-active" exact={true} className="footerLink">
                        <p>Contact Us</p>
                    </NavLink>
                </div>
                <div className="footerDetails">
                    <h2>Connect</h2>
                    <p className="footerItem">
                        <a href="https://www.instagram.com/bagsuz/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#5a5858' }}>
                            Instagram
                        </a>
                    </p>
                    <p className="footerItem">
                        <a href="https://www.facebook.com/bagsuz/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#5a5858' }}>
                            Facebook
                        </a>
                    </p>
                </div>
            </div>
            <div className="footerBottom">
                <p>&#169; 2017 - 2020 Bagsuz Handcrafted Goods. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;