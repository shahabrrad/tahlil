import React, { Component } from 'react'
import styles from './css/style.css';
import background from './img/bg.svg';
import avatar from "./img/avatar.svg";
import wave from './img/wave.png';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../../actions/auth';
import PropTypes from 'prop-types';
//import { userActions } from '../_actions';
export class LoginPage extends Component {
    state = {
        email: '',
        password: '',
    };

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { username, password } = this.state;
        return (
            <div>
                <img className="wave" src={wave} alt="wave" />
                <div className="container">
                    <div className="img">
                        <img src={background} alt="bg" />
                    </div>
                    <div className="login-content">
                        <form onSubmit={this.onSubmit}>
                            <img src={avatar} alt="avatar" />
                            <h2 className="title">خوش آمدید</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <input type="email" name="email" className="input" placeholder="ایمیل" dir="rtl" onChange={this.onChange}
                                        value={username} />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <input type="password" name="password" className="input" placeholder="رمز عبور" dir="rtl" onChange={this.onChange}
                                        value={password} />
                                </div>
                            </div>
                            <a><Link to="/register">ایجاد حساب</Link></a>
                            <input type="submit" className="btn" value="ورود" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginPage);
