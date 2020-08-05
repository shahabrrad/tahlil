import { combineReducers } from 'redux';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import groups from './groups';
export default combineReducers({
    groups,
    errors,
    messages,
    auth,
});