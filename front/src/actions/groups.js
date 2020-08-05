import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_GROUPS, DELETE_GROUP, ADD_GROUP, ADD_MEMBER, GET_MEMBERS } from './types';

// GET groupS
export const getGroups = () => (dispatch, getState) => {
    axios
        .get('/api/gathering/getGatherings/', tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: GET_GROUPS,
                payload: res.data,
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE group
export const deleteGroup = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/gathering/${id}/`, tokenConfig(getState))
        .then((res) => {
            dispatch(createMessage({ deleteGroup: 'group Deleted' }));
            dispatch({
                type: DELETE_GROUP,
                payload: id,
            });
        })
        .catch((err) => console.log(err));
};

// ADD group
export const addGroup = (group) => (dispatch, getState) => {
    //console.log(group);
    axios
        .post('/api/gathering/', group, tokenConfig(getState))
        .then((res) => {
            //dispatch(createMessage({ addGroup: 'group Added' }));
            dispatch({
                type: ADD_GROUP,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch(returnErrors(err.response.data, err.response.status))
        });

};


//add member
export const addMember = (member_id, group_id) => (dispatch, getState) => {
    axios
        .put(`/api/gathering/${group_id}/`, member_id, tokenConfig(getState))
        .then((res) => {
            dispatch(createMessage({ addMember: 'Member Added' }));
            dispatch({
                type: ADD_MEMBER,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch(returnErrors(err.response.data, err.response.status))
        });
};


// GET members
export const getMembers = (group_id) => (dispatch, getState) => {
    axios
        .get(`/api/gathering/members/${group_id}`, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: GET_MEMBERS,
                payload: res.data,
            });
        })
        .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};