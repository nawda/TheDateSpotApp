const initState = {
    accepted: false
}

const acceptTermsReducer = function(state = initState, action) {
    switch (action.type) {
        case 'TOGGLE_ACCEPTED':
            return { ...state, accepted: action.payload };
        default:
            return state
    }
}

export default acceptTermsReducer;
