
let initialState = { value: 0, email: "HEHEH" };

const CHANGE_EMAIL = 'entry1/changeEmail';

export const entry1Reduser = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_EMAIL:
          debugger;
        return { ...state, email: action.email}
      case 'counter/decremented':
        return { value: state.value - 1 }
      default:
        return state
    }
}

export const changeEmail = email => ({
        type: CHANGE_EMAIL,
        email : "XXXXXXX"
});



  
