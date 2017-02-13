export function selectUsers(nameA, nameB) {
    return (dispatch, getState) => {
        const {users} = getState();

        dispatch({
            type: 'SELECT_USERS',
            payload: {
                nameA: nameA,
                nameB: nameB,
                users: users
            }
        });
    };
}

export function deleteUser(name) {
	return {
		type: 'DELETE_USER',
		payload: name
	}
}
