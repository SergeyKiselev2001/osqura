import Entry1 from "./Entry1";
import { connect } from "react-redux";
import { changeEmail } from "../../redux/entry1Reduser";


const Entry1Container = props => {

    return (
        <>
            <Entry1 {...props}/>
        </>
    )
}

const mapStateToProps = state => {
    
    return  {
        email : state.entry1Reduser.email   
    }
}

const mapDispatchToProps = {
    changeEmail
}


export default connect(mapStateToProps, mapDispatchToProps)(Entry1Container);