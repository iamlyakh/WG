import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserList from '../components/UserList';
import CompareForm from '../components/CompareForm';
import {bindActionCreators } from 'redux';
import * as actions from '../actions/Actions';

class App extends Component {
	render() {
		const {users, columns, actions} = this.props;

		return <div>
			<UserList users={users} columns={columns} actions={actions}/>
            <CompareForm actions={actions}/>
		</div>
	}
}

function mapStateToProps(state) {
	return {
	    columns: state.columns,
		users: state.users.map(user => {
		    return {...user, ...{
		        rating: (user.winsTotal / user.daysTotal).toFixed(2)
            }}
        })
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)