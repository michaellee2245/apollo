import axios from 'axios';

const initialState = {

    id: '',
    username: '',
    

}

const SIGN_IN_USER = "SIGN_IN_USER";

const reducer = (state = initialState, actions) => {
    switch(actions.type){
        case SIGN_IN_USER:
            return Object.assign({}, state, {username: actions.payload})
        default:
            return state
    }
}

export function signInUser(user){
    return{type: SIGN_IN_USER, payload: user}
}

export default reducer