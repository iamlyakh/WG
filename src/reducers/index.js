import {combineReducers} from 'redux';
import columns from './columns';
import users from './users';
import selectedUsers from './selectedUsers';

const rootReducer = combineReducers({
	users: users,
	columns: columns,
	selectedUsers: selectedUsers
});

export default rootReducer;