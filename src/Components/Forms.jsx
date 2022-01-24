import Entry1Container from "./Forms/Entry1Container";
import Entry2Container from "./Forms/Entry2Container";
import RegistrationContainer from "./Forms/RegistrationContainer";


const Forms = props => {

    const form1 = props.state.form1IsVisible ? <Entry1Container/> : '';
    const form2 = props.state.form2IsVisible ? <Entry2Container/> : '';
    const form3 = props.state.registrationIsVisible ? <RegistrationContainer/> : '';

    return (
        <div>
            {form1}

            {form2}

            {form3}
        </div>
    )
}

export default Forms;