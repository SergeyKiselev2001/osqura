
import classes from './../Styles/App/buttons.module.css';


const Buttons = props => {

    const entry1Click = () => {
        props.toggleResult(false);
        props.toggleForm1();
    }
    const entry2Click = () => {
        props.toggleResult(false);
        props.toggleForm2();
    }
    const registrationClick = () => {
        props.toggleResult(false);
        props.toggleForm3();
    }   

    return (
        <div className={classes.buttons}>
            <button className={classes.button} onClick={entry1Click}>Вход 1</button>
            <button className={classes.button} onClick={entry2Click}>Вход 2</button>
            <button className={classes.button} onClick={registrationClick}>Регистрация</button>
        </div>
    )
}

export default Buttons;