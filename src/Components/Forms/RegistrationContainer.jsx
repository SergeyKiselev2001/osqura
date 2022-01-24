import Entry1 from "./Entry1";
import { connect } from "react-redux";
import { changeEmail } from "../../redux/entry1Reduser";
import Registration from "./Registration";


const RigistrationContainer = props => {

    return (
        <>
            <Registration {...props}/>
        </>
    )
}

const mapStateToProps = state => {
    
    return  {
        //email : state.entry1Reduser.email   
    }
}

const mapDispatchToProps = {
    //changeEmail
}

export default connect(mapStateToProps, mapDispatchToProps)(RigistrationContainer);