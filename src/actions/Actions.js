export function selectUser(id) {
	return {
		type: 'SELECT_USER',
		payload: id
	}
}

export function deleteUser(id) {
	return {
		type: 'DELETE_USER',
		payload: id
	}
}
