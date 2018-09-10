import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../../Assets/images/logo.svg';
import CONSTANTS from './../../../Constants';

import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stickyHeader: false
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', (e) => {
            if (window.scrollY > 60) {
                this.setState({ stickyHeader: true });
            } else {
                this.setState({ stickyHeader: false });
            }
        })
    }
    render() {
        const navitems = CONSTANTS.NAV_ITEMS
        return (
            <div className={`HeaderContainer ${this.state.stickyHeader ? 'HeaderContainer__Sticky' : ''}`}>
                <div className="Header container">
                    <Link to="/" className="Logo">
                        <img src={logo} alt="Built With React" />
                        <span>Built with React</span>
                    </Link>
                    <nav className="Navigation">
                        <ul>
                            {
                                navitems.map((item) => (
                                    <li className="Navigation-Item" key={`nav-${item.title.replace(" ", "-")}`}>
                                        <NavLink className={`Navigation-Link ${item.addSeperator && 'Navigation-Link__Seprator'}`}
                                            activeStyle={{ color: "#4caf4f", borderBottom: "2px #4caf4f solid" }}
                                            to={`/${item.url}`}>
                                            {item.title}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

Header.propTypes = {

};

export default Header;