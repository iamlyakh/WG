import React, {Component} from 'react';
import {connect} from 'react-redux';
import {usersWithRatingSelector, userASelector, userBSelector} from '../selectors/selectors';
import UserList from '../components/UserList';
import SelectForm from '../components/SelectForm';
import CompareTable from '../components/CompareTable';
import {bindActionCreators } from 'redux';
import * as actions from '../actions/Actions';

class App extends Component {
	render() {
		const {users, columns, actions, userA, userB} = this.props;

		return <div>
			<UserList users={users} columns={columns}/>
            <SelectForm actions={actions}/>
			<CompareTable userA={userA} userB={userB} columns={columns}/>
		</div>
	}
}

function mapStateToProps(state) {
	return {
	    columns: state.columns,
		users: usersWithRatingSelector(state),
		userA: userASelector(state),
		userB: userBSelector(state)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)