import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import styles from "tabler-react/dist/Tabler.css";
import { Card, Button, Nav } from "tabler-react";
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../common/Backdrop/Backdrop'
import backdrop from '../common/Backdrop/Backdrop';
import drawerToggleButton from '../SideDrawer/DrawerToggleButton';
export class Dashboard extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
    };
    state = {
        SideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { SideDrawerOpen: !prevState.SideDrawerOpen };
        });
    };

    backDropClickHandler = () => {
        this.setState({ SideDrawerOpen: false });
    }
    render() {
        let backdrop;

        if (this.state.SideDrawerOpen) {
            backdrop = <Backdrop click={this.backDropClickHandler} />
        }


        const { isAuthenticated, user } = this.props.auth;
        if (user) {
            return (
                <div style={{ height: '100%' }}>
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler} toLogOut={this.props.logout} username={user.username} />
                    <SideDrawer show={this.state.SideDrawerOpen} toLogOut={this.props.logout} />
                    {backdrop}
                </div>

            )
        } else {
            return (
                <div />
            )
        }
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Dashboard);