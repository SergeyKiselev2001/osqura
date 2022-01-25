import Entry1Container from "./Forms/Entry1Container";
import Entry2Container from "./Forms/Entry2Container";
import RegistrationContainer from "./Forms/RegistrationContainer";
import ResultContainer from "./ResultContainer";

const Forms = props => {

    return (
        <div>
            {props.state.form1IsVisible && <Entry1Container/>}
            {props.state.form2IsVisible && <Entry2Container/> }
            {props.state.registrationIsVisible && <RegistrationContainer/>}
            {props.state.resultIsVisible && <ResultContainer/>}
        </div>
    )
}

export default Forms;