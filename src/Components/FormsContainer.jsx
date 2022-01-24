
import Forms from './Forms';

import { connect } from "react-redux";


const FormsContainer = props => {

    

    return (
        <>
            <Forms {...props}/>
        </>
    )
}

const mapStateToProps = state => {

    return  {
        state : state.appReduser  
    }
}

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps, mapDispatchToProps)(FormsContainer);