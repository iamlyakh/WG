import React, {Component} from 'react';
import {connect} from 'react-redux';
import {usersWithRatingSelector} from '../selectors/selectors';
import UserList from '../components/UserList';
import {bindActionCreators } from 'redux';
import * as actions from '../actions/Actions';

class UserListPage extends Component {
	render() {
		const {users, columns} = this.props;

		return <UserList users={users} columns={columns}/>
	}
}

function mapStateToProps(state) {
	return {
		columns: state.columns,
		users: usersWithRatingSelector(state)
	}
}
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);