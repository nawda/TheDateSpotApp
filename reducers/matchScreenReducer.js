const initState = {
    users: []
}

const matchScreenReducer = function(state = initState, action) {
    switch (action.type) {
        case 'MUTUAL_LIKE':
            return { ...state, users: action.payload.users };
        default:
            return state
    }
}

export default matchScreenReducer;
