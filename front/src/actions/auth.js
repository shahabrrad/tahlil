import axios from 'axios';
import { returnErrors } from './messages';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    UPDATE_SUCCESS,
} from './types';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: USER_LOADING });

    axios
        .get('/api/profile/', tokenConfig(getState)) ///api/v1/auth/user/
        .then((res) => {
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR,
            });
        });
};

// LOGIN USER
export const login = (email, password) => (dispatch) => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Request Body
    const body = JSON.stringify({ email, password });

    axios
        .post('/api/authenticate/login/', body, config) ///api/v1/auth/login/
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            //console.log(err);
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL,
            });
        });
};

// REGISTER USER
export const register = ({ password, email }) => (dispatch) => {//username
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Request Body
    const body = JSON.stringify({ email, password });//username

    axios
        .post('/api/authenticate/register/', body, config) ///api/v1/auth/register/
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAIL,
            });
        });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
    axios
        .post('/api/authenticate/logout/', "", tokenConfig(getState)) ///api/v1/auth/logout/
        .then((res) => {
            //dispatch({ type: 'CLEAR_LEADS' });
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        })
        .catch((err) => {
            console.log(tokenConfig(getState));
            dispatch(returnErrors(err.response.data, err.response.status));
        });
};



// Profile Update
export const update_profile = (name) => (dispatch, getState) => {
    console.log('here');
    axios
        .post('/api/profile/', name, tokenConfig(getState)) ///api/v1/auth/logout/
        .then((res) => {
            //dispatch({ type: 'CLEAR_LEADS' });
            dispatch({
                type: UPDATE_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch(returnErrors(err.response.data, err.response.status));
        });
};




// Setup config with token - helper function
export const tokenConfig = (getState) => {
    // Get token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // If token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
};