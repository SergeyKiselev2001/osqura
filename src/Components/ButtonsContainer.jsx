import { toggleForm1, toggleForm2, toggleForm3 } from './../redux/appReduser';


import { connect } from "react-redux";
import Buttons from './Buttons';


const ButtonsContainer = props => {

    return (
        <>
            <Buttons {...props}/>
        </>
    )
}

const mapStateToProps = state => {
    return  {
        state : state.appReduser  
    }
}

const mapDispatchToProps = {
    toggleForm1,
    toggleForm2,
    toggleForm3
}


export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer);