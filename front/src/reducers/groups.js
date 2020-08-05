import { GET_GROUPS, DELETE_GROUP, ADD_GROUP, CLEAR_GROUPS, ADD_MEMBER, GET_MEMBERS } from '../actions/types.js';

const initialState = {
    groups: [],
    members_of_group: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_MEMBER:
            return {
                ...state,
                members_of_group: [...state.members_of_group, action.payload],
            }
        case GET_GROUPS:
            return {
                ...state,
                groups: action.payload,
            };
        case GET_MEMBERS:
            return {
                ...state,
                members_of_group: action.payload,
            };
        case DELETE_GROUP:
            return {
                ...state,
                groups: state.groups.filter((group) => group.id !== action.payload),
            };
        case ADD_GROUP:
            return {
                ...state,
                groups: [...state.groups, action.payload],
            };
        case CLEAR_GROUPS:
            return {
                ...state,
                groups: [],
            };
        default:
            return state;
    }
}