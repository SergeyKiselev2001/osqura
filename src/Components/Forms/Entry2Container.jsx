
import Entry2 from "./Entry2";
import { connect } from "react-redux";
import { changeEmail } from "../../redux/entry1Reduser";


const Entry2Container = props => {

    return (
        <>
        <h1>ent2</h1>
            <Entry2 {...props}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(Entry2Container);