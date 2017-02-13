import {combineReducers} from 'redux';
import columns from './columns';
import users from './users';

const rootReducer = combineReducers({
	users: users,
	columns: columns
});

export default rootReducer;