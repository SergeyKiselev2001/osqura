

import classes from './../../Styles/Forms/form.module.css';

const Registration = props => {

    const changeEmail = e => {

        //props.changeEmail('xxx');
    }

    const exit = () => {
        props.exit();
    }

    return (
        <div className={classes.form_area}>
            <div className={classes.form_box}>
                <h1>Registration</h1>
                <button onClick={exit}>EXIT</button>
                <button onClick={changeEmail}>{props.email}</button>
            </div>
        </div>
    )
}

export default Registration;