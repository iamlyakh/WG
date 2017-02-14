export function selectUsers(nameA, nameB) {
	return {
		type: 'SELECT_USERS',
		payload: {
			nameA: nameA,
			nameB: nameB
		}
	}
}
