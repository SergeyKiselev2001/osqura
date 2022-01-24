
import Entry2 from "./Entry2";
import { connect } from "react-redux";
import { changeEmail } from "../../redux/entry1Reduser";
import { exit } from '../../redux/appReduser';


const Entry2Container = props => {

    return <Entry2 {...props}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(Entry2Container);