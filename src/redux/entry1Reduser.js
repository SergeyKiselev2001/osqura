import { API_1 } from "../APIs/API_1";

let initialState = {
    email: "" 
};

const CHANGE_EMAIL = 'entry1/changeEmail';
const SUBMIT = 'entry1/submit';

export const entry1Reduser = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_EMAIL:
       
        return { ...state, email: action.email};

        case SUBMIT:
  
      default:
        return state
    }
}

export const changeEmail = email => ({type: CHANGE_EMAIL, email});


export const submitThunkCreator = (email) => async (dispatch) => {


   const result = await API_1.sendEmailToCheck(email);

   console.log(result);

   
}



  
