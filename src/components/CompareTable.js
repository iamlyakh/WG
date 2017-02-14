import React, {PropTypes, Component} from 'react';

export default class CompareTable extends Component {
	renderRow(column) {
		const {userA, userB} = this.props;
		const valA = userA && userA[column.id];
		const valB = userB && userB[column.id];

		const getClass = (valA, valB) => {
			if (isNaN(valA) || isNaN(valB)) {
				return '';
			}

			if (valA !== valB) {
				return valA > valB ? 'greater' : 'less';
			}

			return 'equal';
		};

		return <tr key={column.id}>
			<td>{column.label}</td>
			<td className={getClass(valA, valB)}>{valA}</td>
			<td className={getClass(valB, valA)}>{valB}</td>
		</tr>
	}

	render() {
		return <table>
			<thead>
				<tr>
					<th>Property</th>
					<th>User A</th>
					<th>User B</th>
				</tr>
			</thead>
			<tbody>
				{this.props.columns.map(column => this.renderRow(column))}
			</tbody>
		</table>
	}
}
