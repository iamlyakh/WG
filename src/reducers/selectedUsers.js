export default function selectedUsers(state = {}, action) {
    switch (action.type) {
        case 'SELECT_USERS':
            return {...state, ...{
                nameA: action.payload.nameA,
                nameB: action.payload.nameB
            }};
            break;
        default:
            return state;
    }
}