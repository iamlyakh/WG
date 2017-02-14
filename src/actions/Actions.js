export function selectUsers(nameA, nameB) {
	return {
		type: 'SELECT_USERS',
		payload: {
			nameA: nameA,
			nameB: nameB
		}
	}
}

export function deleteUser(name) {
	return {
		type: 'DELETE_USER',
		payload: name
	}
}
