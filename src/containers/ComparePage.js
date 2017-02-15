import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userASelector, userBSelector, columnsWithoutNameSelector} from '../selectors/selectors';
import SelectForm from '../components/SelectForm';
import CompareTable from '../components/CompareTable';
import {bindActionCreators } from 'redux';
import * as actions from '../actions/Actions';

class ComparePage extends Component {
	render() {
		const {selectedUsers, columns, actions, userA, userB} = this.props;

		return <div className='wg-page_compare'>
			<SelectForm selectedUsers={selectedUsers} actions={actions}/>
			<CompareTable userA={userA} userB={userB} columns={columns}/>
		</div>
	}
}

function mapStateToProps(state) {
	return {
		columns: columnsWithoutNameSelector(state),
		selectedUsers: state.selectedUsers,
		userA: userASelector(state),
		userB: userBSelector(state)
	}
}
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ComparePage)