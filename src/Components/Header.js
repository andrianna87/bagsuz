import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import '../icons/BagsuzLogo';
import BagsuzLogo from "../icons/BagsuzLogo";
import ArrowDown from "../icons/ArrowDown";

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(e) {
        e.preventDefault();

        this.setState({
            showMenu: true,
        },
            () => {
            document.addEventListener('click', this.closeMenu);
         });
    }

    closeMenu() {
        this.setState({showMenu: false},
            () => {
            document.removeEventListener('click', this.closeMenu);
            });
    }

    render() {

        const headerBtnStyle = {
            padding: '0',
            border: '0',
            backgroundColor: "transparent",
            outline: "none"
        };

        const middleItemStyle = {
            marginRight: '5px'
        };

        return(
            <header>
                <div className="headerContainer">
                    <div className="left">
                        <NavLink to="/" exact="true" style={{ textDecoration: 'none', color: '#333333' }}>
                            <BagsuzLogo/>
                        </NavLink>
                        {process.env.PUBLIC_URL}
                    </div>
                    <div className="middle">
                        <h3 className="middleItem">
                            <NavLink to="/shop" activeClassName="is-active" exact={true} style={{ textDecoration: 'none' }}>Shop</NavLink>
                        </h3>
                        <button onClick={this.showMenu} className="middleItem" style={headerBtnStyle}>
                            <h3 style={middleItemStyle}>
                                About
                            </h3>
                            <ArrowDown/>
                        </button>
                        {this.state.showMenu ? (
                            <div className="menu">
                                <ul>
                                    <li>
                                        <h3>
                                            <NavLink to="/about" activeClassName="is-active" exact={true} style={{ textDecoration: 'none', color: '#333333' }}>Who's Bagsuz?</NavLink>
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            <NavLink to="/press" activeClassName="is-active" exact={true} style={{ textDecoration: 'none', color: '#333333' }}>Bagsuz Press Page</NavLink>
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            <NavLink to="/prev-collections" activeClassName="is-active" exact={true} style={{ textDecoration: 'none', color: '#333333' }}>Previous Collections</NavLink>
                                        </h3>
                                    </li>
                                </ul>
                            </div>
                            )
                            : (
                                null
                            )
                        }
                        <h3 className="contactMenu">
                            <NavLink to="/contact" activeClassName="is-active" exact={true} style={{ textDecoration: 'none', color: '#333333' }}>Contact</NavLink>
                        </h3>
                    </div>
                    <div className="right">
                        <p>
                            <a href="https://www.instagram.com/bagsuz/" target="_blank" rel="noopener noreferrer">Instagram</a> / <a href="https://www.facebook.com/bagsuz/" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </p>
                    </div>
                </div>
            </header>
        );
    }
}