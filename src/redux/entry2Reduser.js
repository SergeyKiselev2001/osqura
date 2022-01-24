import { API_1 } from "../APIs/API_1";
//import { toggleForm1, toggleForm2 } from "./appReduser";

let initialState = {
    email: '',
    password: '',
    isPending : false,
    errorMessage : '',
};


const TOGGLE_PENDING = 'entry2/pending';
const SET_ERROR_MESSAGE = 'entry2/setErrorMessage';

export const entry2Reduser = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PENDING:
            return {...state, isPending : !state.isPending}
        case SET_ERROR_MESSAGE:
            return {...state, errorMessage : action.errorMessage};
  
      default:
        return state
    }
}


export const tooglePendingEntry2 = () => ({type: TOGGLE_PENDING});
export const setErrorMessageEntry2 = (errorMessage) => ({type : SET_ERROR_MESSAGE, errorMessage});


export const AuthorizationThunkCreator = (email, password) => async (dispatch) => {
    dispatch(tooglePendingEntry2());

    try {
        const result = await API_1.authorization(email, password);
    } catch (e) {
        dispatch(setErrorMessageEntry2('Неверный логин/пароль'));
    } finally {
        dispatch(tooglePendingEntry2());
    }
}



  