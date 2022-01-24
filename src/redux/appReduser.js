


let initialState = { 
    form1IsVisible: true, 
    form2IsVisible: false,
    registrationIsVisible: false
};

const TOGGLE_FORM_1 = 'app/toggleForm1';
const TOGGLE_FORM_2 = 'app/toggleForm2';
const TOGGLE_FORM_3 = 'app/toggleForm3';
const EXIT = 'app/exit';

export const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FORM_1:
            return { ...state, form1IsVisible: !state.form1IsVisible}
        case TOGGLE_FORM_2:
            return { ...state, form2IsVisible: !state.form2IsVisible}
        case TOGGLE_FORM_3:
            return { ...state, registrationIsVisible: !state.registrationIsVisible}
        case EXIT:
            return { 
                ...state, 
                form1IsVisible: false, 
                form2IsVisible: false,
                registrationIsVisible: false
            }
  
      default:
        return state
    }
}

export const toggleForm1 = () => ({type: TOGGLE_FORM_1});
export const toggleForm2 = () => ({type: TOGGLE_FORM_2});
export const toggleForm3 = () => ({type: TOGGLE_FORM_3});
export const exit = () => ({type: EXIT});


  