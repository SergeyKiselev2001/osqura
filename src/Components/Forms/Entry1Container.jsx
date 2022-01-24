import Entry1 from "./Entry1";
import { connect } from "react-redux";
import { changeEmail } from "../../redux/entry1Reduser";
import { exit } from '../../redux/appReduser';


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
    changeEmail,
    exit
}


export default connect(mapStateToProps, mapDispatchToProps)(Entry1Container);