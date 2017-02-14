import React, {PropTypes, Component} from 'react'

export default class UserList extends Component {
	renderHead() {
		return <tr>
			{
				this.props.columns.map((column) =>
					<th key={column.id}>{column.label}</th>
				)
			}
		</tr>
	}

	renderRow(user) {
		return <tr key={user.id}>
			{
				this.props.columns.map(column =>
					<td key={column.id}>{user[column.id]}</td>
				)
			}
		</tr>
	}

	render() {
		return <table>
			<thead>
				{this.renderHead()}
			</thead>
			<tbody>
				{this.props.users.map((user) => this.renderRow(user))}
			</tbody>
		</table>
	}
}

UserList.propTypes = {
	columns: PropTypes.array.isRequired,
	users: PropTypes.array.isRequired
};