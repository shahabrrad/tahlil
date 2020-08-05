import React from 'react'
import './SideDrawer.css';
import { Link, Redirect } from 'react-router-dom';
const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (<nav className={drawerClasses}>
        <ul>
            <li><a><Link to='/'>Home</Link></a></li>
            <li><a><Link to='/groups'>Groups</Link></a></li>
            <li onClick={props.toLogOut}>Logout</li>
        </ul>
    </nav>);
};
export default sideDrawer;