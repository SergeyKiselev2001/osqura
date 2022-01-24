import Entry1Container from "./Forms/Entry1Container";
import Entry2Container from "./Forms/Entry2Container";

const Forms = props => {

    const form1 = props.state.form1IsVisible ? <Entry1Container/> : '';
    const form2 = props.state.form2IsVisible ? <Entry2Container/> : '';

    debugger;

    return (
        <>
            <h1>Forms</h1>
            {form1}
            <hr />
            {form2}
        </>
    )
}

export default Forms;