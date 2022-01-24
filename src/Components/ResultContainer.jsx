import { connect } from "react-redux";
import Result from './Result';


const ResultContainer = props => {

    return <Result {...props}/>
}

const mapStateToProps = state => {

    return  {
        state : state.appReduser  
    }
}

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer);