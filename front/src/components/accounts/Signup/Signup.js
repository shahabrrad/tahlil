import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import styles from './css/style.css';
import background from './img/bg.svg';
import avatar from "./img/avatar.svg";
import wave from './img/wave.png';
import PropTypes from 'prop-types';
import { register } from '../../../actions/auth';
import { createMessage } from '../../../actions/messages';
export class Signup extends Component {
    state = {
        //username: '',
        email: '',
        password: '',
        password2: '',
    };

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { email, password, password2 } = this.state;
        if (password !== password2) {
            this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
        } else {
            const newUser = {
                password,
                email,
            };
            this.props.register(newUser);
        }
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { username, email, password, password2 } = this.state;
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
                            <h2 className="title">عضو شوید</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <h5></h5>
                                    <input type="email" className="input" placeholder="پست الکترونیکی" dir="rtl" name="email" onChange={this.onChange}
                                        value={email} />
                                </div>
                            </div>

                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <input type="password" className="input" placeholder="رمز عبور" dir="rtl" name="password" onChange={this.onChange}
                                        value={password} />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <input type="password" className="input" placeholder="تکرار رمز" dir="rtl" name="password2" onChange={this.onChange}
                                        value={password2} />
                                </div>
                            </div>
                            <a><Link to="/login">عضو هستید؟</Link></a>
                            <input type="submit" className="btn" value="عضویت" />
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

export default connect(mapStateToProps, { register, createMessage })(Signup);