import { API_1 } from "../APIs/API_1";
import { setResultMessage, toggleForm3, toggleResult } from "./appReduser";
//import { toggleForm1, toggleForm2 } from "./appReduser";

let initialState = {
    isPending : false,
    errorMessage : '',
};


const TOGGLE_PENDING = 'reg/pending';
const SET_ERROR_MESSAGE = 'reg/setErrorMessage';


export const registrationReduser = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PENDING:
            return {...state, isPending : !state.isPending}
        case SET_ERROR_MESSAGE:
            return {...state, errorMessage : action.errorMessage};

  
      default:
        return state
    }
}


export const tooglePendingRegistration = () => ({type: TOGGLE_PENDING});
export const setErrorMessageRegistration = (errorMessage) => ({type : SET_ERROR_MESSAGE, errorMessage});


export const addUserThunkCreator = (name, phone, email, password) => async (dispatch) => {

    dispatch(tooglePendingRegistration());

    try {
        
        const result = await API_1.addUser(name, phone, email, password);

        if (result.data.success){
            dispatch(toggleResult(true));
        }

        dispatch(toggleForm3());
        dispatch(setResultMessage(`Аккаунт был успешно создан! login: ${email} password: ${password}`));

    } catch (e) {
        dispatch(setErrorMessageRegistration('Введите корректные данные...'));
    } finally {
        
        dispatch(tooglePendingRegistration());
    }
}



  