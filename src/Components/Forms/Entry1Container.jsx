import Entry1 from "./Entry1";
import { connect } from "react-redux";
import { submitThunkCreator } from "../../redux/entry1Reduser";
import { exit } from '../../redux/appReduser';


const Entry1Container = props => {
    return <Entry1 {...props}/>
}

const mapStateToProps = state => {
    return  {
        isPending : state.entry1Reduser.isPending
    }
}

const mapDispatchToProps = {
    submit : submitThunkCreator,
    exit
}


export default connect(mapStateToProps, mapDispatchToProps)(Entry1Container);