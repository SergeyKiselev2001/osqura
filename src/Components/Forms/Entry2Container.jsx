
import Entry2 from "./Entry2";
import { connect } from "react-redux";
import { AuthorizationThunkCreator } from "../../redux/entry2Reduser";
import { exit } from '../../redux/appReduser';


const Entry2Container = props => {

    return <Entry2 {...props}/>
}

const mapStateToProps = state => {
    
    return  {
        isPending: state.entry2Reduser.isPending,
        errorMessage : state.entry2Reduser.errorMessage
    }
}

const mapDispatchToProps = {
    AuthorizationThunkCreator,
    exit
}


export default connect(mapStateToProps, mapDispatchToProps)(Entry2Container);