import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import columns from './columns';
import users from './users';
import selectedUsers from './selectedUsers';

const rootReducer = combineReducers({
	users: users,
	columns: columns,
	selectedUsers: selectedUsers,
	routing: routerReducer
});

export default rootReducer;