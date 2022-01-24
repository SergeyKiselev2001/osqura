
import classes from './../Styles/App/result.module.css';

const Result = props => {


    return (
        <div className={classes.result}>
            <h1>
               { props.state.resultIsVisible && props.state.resultMessage }
            </h1>
        </div>
    )

}


export default Result;