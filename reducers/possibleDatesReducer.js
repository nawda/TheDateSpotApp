const initState = {
    possibleDates: [],
    liked: [],
    disliked: []
}

const possibleDatesReducer = function(state = initState, action) {
    switch (action.type) {
        case 'LIKE_USER':
            return {
                ...state,
                possibleDates: state.possibleDates.filter(u => u._id !== action.payload.user._id),
                liked: state.liked.concat([user.payload.user])
            };

        case 'DISLIKE_USER':
            return {
                ...state,
                possibleDates: state.possibleDates.filter(u => u._id !== action.payload.user._id),
                disliked: state.disliked.concat([user.payload.user])
            };
        
        default:
            return state;
    }
}

export default possibleDatesReducer;
