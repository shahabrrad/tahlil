import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import UpdateProfile from '../users/UpdateProfile'
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href='/'>The Logo</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a><Link to='/'>Home</Link></a></li>
                    <li><UpdateProfile /></li>
                    <li><a><Link to='/groups'>Groups</Link></a></li>
                    <li onClick={props.toLogOut}>Logout</li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar
