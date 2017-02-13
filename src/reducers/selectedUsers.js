export default function selectedUsers(state = {}, action) {
    switch (action.type) {
        case 'SELECT_USERS':
            const userA = action.payload.users.find(user => user.name === action.payload.nameA);
            const userB = action.payload.users.find(user => user.name === action.payload.nameB);

            return {...state, ...{
                userA: userA && !userA.isHidden ? userA : null,
                userB: userB && !userB.isHidden ? userB : null,
            }};
            break;
        default:
            return state;
    }
}