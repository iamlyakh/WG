import React, {PropTypes, Component} from 'react';

export default class SelectForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameA: props.selectedUsers.nameA || '',
			nameB: props.selectedUsers.nameB || ''
		}
	}

	selectUsers() {
		const {selectUsers} = this.props.actions;
		const {nameA, nameB} = this.state;

		selectUsers(nameA, nameB);
	}

	setNameA(e) {
		this.setState({
			nameA: e.target.value
		});
	}

	setNameB(e) {
		this.setState({
			nameB: e.target.value
		});
	}

	render() {
		return <div>
			<input onChange={::this.setNameA} value={this.state.nameA}/>
			<input onChange={::this.setNameB} value={this.state.nameB}/>
			<button onClick={::this.selectUsers}>Сравнить</button>
		</div>
	}
}
