import { API_1 } from "../APIs/API_1";
import { setResultMessage, toggleForm2, toggleForm3, toggleResult } from "./appReduser";
//import { toggleForm1, toggleForm2 } from "./appReduser";

let initialState = {
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

        dispatch(toggleResult(true));

        dispatch(setResultMessage('Успешная авторизация!'));
        debugger;
        dispatch(toggleForm2());
    } catch (e) {
        debugger;
        dispatch(setErrorMessageEntry2('Неверный логин/пароль'));
    } finally {
        dispatch(tooglePendingEntry2());
        //dispatch(toggleResult());
    }
}



  