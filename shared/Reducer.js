import actions from "./Actions";

const reducer = (state, action) => {
    switch (action.type) {
        case actions.LOGIN:
        return {
            ...state,
            user : action.payload,
            isLoggedIn : true
        }
        
        case actions.FETCH_TRANSMISSION: {
            return state
        }
        case actions.SUBMIT_TRANSCRIPTION: {
            return state
        }
        case actions.SET_ERRORS: {
            return {...state , errors : action.payload}
        }
        case actions.LOGOUT: {
            return {...state , isLoggedIn : false}
        }
        default:
            return state;
    }
};

export default reducer;
