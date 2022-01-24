import { API_1 } from "../APIs/API_1";
import { toggleForm1, toggleForm2 } from "./appReduser";

let initialState = {
    email: "",
    isPending : false,
};

const CHANGE_EMAIL = 'entry1/changeEmail';

const TOGGLE_PENDING = 'entry1/pending';

export const entry1Reduser = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_EMAIL:
        return { ...state, email: action.email};
      case TOGGLE_PENDING:
        debugger;
          return {...state, isPending : !state.isPending}
  
      default:
        return state
    }
}

export const changeEmail = email => ({type: CHANGE_EMAIL, email});
export const tooglePendingEntry1 = () => ({type: TOGGLE_PENDING});


export const submitThunkCreator = (email) => async (dispatch) => {

    dispatch(tooglePendingEntry1());

    const result = await API_1.sendEmailToCheck(email);

    if (result.data.exists){
      dispatch(toggleForm1());
      dispatch(toggleForm2());
    }
   
    dispatch(tooglePendingEntry1());
}



  
