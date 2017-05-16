const initState = {
    imageUrl: '',
    occupation: '',
    dateOfBirth: undefined,
    gender: '',
    minAge: 0,
    maxAge: 100,
    workAddress: {
        address: '',
        location: {
            lat: undefined,
            lon: undefined
        }
    },
    homeAddress: {
        address: '',
        location: {
            lat: undefined,
            lon: undefined
        }
    },
    interests: {
        inside: false,
        outside: false,
        alcohol: false,
        noAlcohol: false
    }
}

const publicProfileScreenReducer = function(state = initState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default publicProfileScreenReducer;
