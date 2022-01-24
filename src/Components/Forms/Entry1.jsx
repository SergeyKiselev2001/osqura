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
                    <span>Вход или регистрация</span>
                    <button onClick={exit}>EXIT</button>
                </div>

                <form onSubmit={submit}>
                    <label>Email</label>
                    <br />
                    <input onChange={changeEmail} value={props.email}/>
                    <br />
                    <button type='submit'>Продолжить</button>
                </form>
                <span>Или</span>

                <div className={classes.connectWithSocials}>
                    heh
                </div>

                <span className={classes.loader}>
                { props.isPending ? 'Загрузка...' : ''}
                </span>
                
                
            </div>
        </div>
    )
}

export default Entry1;