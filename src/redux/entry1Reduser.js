import { API_1 } from "../APIs/API_1";
import { toggleForm1, toggleForm2, toggleForm3 } from "./appReduser";

let initialState = {
    isPending : false,
};


const TOGGLE_PENDING = 'entry1/pending';


export const entry1Reduser = (state = initialState, action) => {
    switch (action.type) {
  
      case TOGGLE_PENDING:
        debugger;
          return {...state, isPending : !state.isPending}
  
      default:
        return state
    }
}


export const tooglePendingEntry1 = () => ({type: TOGGLE_PENDING});


export const submitThunkCreator = (email) => async (dispatch) => {

    dispatch(tooglePendingEntry1());

    const result = await API_1.sendEmailToCheck(email);

    debugger;

    if (result.data.exists){
      dispatch(toggleForm1());
      dispatch(toggleForm2());
    } else {
      dispatch(toggleForm1());
      dispatch(toggleForm3());
    }
   
    dispatch(tooglePendingEntry1());
}



  
