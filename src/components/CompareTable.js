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
				return valA > valB ? 'wg-table-cell_greater' : 'wg-table-cell_less';
			}

			return 'wg-table-cell_equal';
		};

		return <tr key={column.id}>
			<td className='wg-table-cell wg-table-cell_fixed-width wg-table-cell_label'>{column.label}</td>
			<td className={'wg-table-cell wg-table-cell_fixed-width ' + getClass(valA, valB)}>{valA}</td>
			<td className={'wg-table-cell  wg-table-cell_fixed-width ' + getClass(valB, valA)}>{valB}</td>
		</tr>
	}

	render() {
		return <table className='wg-table'>
			<tbody>
				{this.props.columns.map(column => this.renderRow(column))}
			</tbody>
		</table>
	}
}
