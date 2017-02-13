import React, {PropTypes, Component} from 'react'

class UserItem extends Component {
    render() {
        const user = this.props.user;

        return <tr>
            {
               this.props.columns.map(column => {
                   return <td key={column.id}>
                       {user[column.id]}
                   </td>
               })
            }
        </tr>
    }
}


export default class UserList extends Component {
    getUserListHead() {
        return <tr>
            {
                this.props.columns.map((column) => {
                    return <th key={column.id}>
                        {column.label}
                    </th>
                })
            }
        </tr>
    }

    getUserList() {
        return this.props.users.map((user) => {
            return <UserItem key={user.id} user={user} columns={this.props.columns}/>
        });
    }

    render() {
		return <table>
            <thead>
            {
                this.getUserListHead()
            }
            </thead>
            <tbody>
            {
                this.getUserList()
            }
            </tbody>
		</table>
	}
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

UserList.propTypes = {
    columns: PropTypes.array.isRequired,
	users: PropTypes.array.isRequired
};