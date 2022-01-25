import { connect } from "react-redux";
import Registration from "./Registration";
import { exit } from '../../redux/appReduser';

import { addUserThunkCreator, setErrorMessageRegistration } from "../../redux/registrationReduser";


const RigistrationContainer = props => {

    return <Registration {...props}/>
}

const mapStateToProps = state => {
    return  {
        isPending : state.registrationReduser.isPending,
        errorMessage : state.registrationReduser.errorMessage   
    }
}

const mapDispatchToProps = {
    addUserThunkCreator,
    setErrorMessageRegistration,
    exit
}

export default connect(mapStateToProps, mapDispatchToProps)(RigistrationContainer);