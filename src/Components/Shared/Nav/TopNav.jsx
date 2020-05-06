import React, { useState } from 'react'
import { Link, useRouteMatch,  NavLink } from "react-router-dom";

const TopNav = () => {
    const [isMenuExpand, setIsMenuExpand] = useState(false);
    const toggleMenu = () => {

        window.$('.offcanvas-collapse').toggleClass('open');


    }
    const actionMenu = (openOrclose) => {
        window.$('.offcanvas-collapse').toggleClass('open');
    }

    function MenuLink({ label, to, activeOnlyWhenExact }) {
    
      
        return (

            <li className="nav-item">
                <NavLink onClick={() => { actionMenu('close') }} className="nav-link"  exact to={to} activeClassName="active">{label}</NavLink>
            </li>
        );
       
      
    }
    return (
        <div className="Nav">
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <a className="navbar-brand mr-auto mr-lg-0" href="#">
                    Offcanvas navbar
                </a>
                <button
                    className="navbar-toggler p-0 border-0"
                    type="button"
                    data-toggle="offcanvas"
                    onClick={() => { toggleMenu() }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="navbar-collapse offcanvas-collapse"
                    id="navbarsExampleDefault"
                >
                    <ul className="navbar-nav nav ml-auto">
                        <MenuLink to="/" label="Home" />
                        <MenuLink to="/about" label="About" />
                    </ul>

                </div>
            </nav>

        </div>
    );
}
export default TopNav;
