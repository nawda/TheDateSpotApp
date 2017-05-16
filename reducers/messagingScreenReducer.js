const initState = {
    users: [],
    messages: [],
    dateIdeas: []
};

const messagingScreenReducer = function(state = initState, action) {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return { ...state, messages: state.messages.concat([action.payload.message])};
        case 'NEW_DATE_IDEA':
            return { ...state, messages: state.messages.concat([action.payload.dateIdea])};
        default:
            return state;
    }
}

export default messagingScreenReducer;
