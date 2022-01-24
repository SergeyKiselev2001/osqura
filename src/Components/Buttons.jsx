


const Buttons = props => {

    const entry1Click = () => {
        props.toggleForm1();
    }
    const entry2Click = () => {
        props.toggleForm2();
    }
    const registrationClick = () => {
        props.toggleForm3();
    }   

    return (
        <div className="buttons">
            <button onClick={entry1Click}>Вход 1</button>
            <button onClick={entry2Click}>Вход 2</button>
            <button onClick={registrationClick}>Регистрация</button>
        </div>
    )
}

export default Buttons;