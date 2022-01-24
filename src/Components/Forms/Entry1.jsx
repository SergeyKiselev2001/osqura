import classes from './../../Styles/Forms/form.module.css';


const Entry1 = props => {

    const changeEmail = e => {

        props.changeEmail(e.target.value);
    }

    const exit = () => {
        props.exit();
    }

    const submit = e => {
        e.preventDefault();
        props.submit(props.email);
    }

    return (
        <div className={classes.form_area}>
            <div className={classes.form_box}>
                <div className={classes.header}>
                    <button onClick={exit}>EXIT</button>
                </div>

                <form onSubmit={submit}>
                    <label>Email</label>
                    <input onChange={changeEmail} value={props.email}/>

                    <button type='submit'>Продолжить</button>
                </form>
                <h1>Entry1</h1>
                
                
            </div>
        </div>
    )
}

export default Entry1;