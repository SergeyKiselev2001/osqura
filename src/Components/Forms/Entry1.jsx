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
                    <div className={classes.close}>
                        <button onClick={exit}></button>
                    </div>
                </div>

                <form onSubmit={submit}>
                    <label>E-mail</label>
                    <br />
                    <input placeholder='E-mail' onChange={changeEmail} value={props.email}/>
                    <br />
                    <span className={classes.error}>Error message here</span>
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