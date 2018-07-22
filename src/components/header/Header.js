import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render(){
        return (
            <div className="header">
                <div className="home">
                    <div className="logo">
                        <img src={require("../../images/claw-marks.png")} alt=""/>
                    </div>
                    <div className="site-name">THRILL OF THE HUNT</div>
                </div>

                <div className="menu">
                    <NavLink exact to="/" activeClassName="active">Pick</NavLink>
                    <NavLink exact to="/ban" activeClassName="active">Ban</NavLink>
                </div>
            </div>
        );
    }
}

export default Header;