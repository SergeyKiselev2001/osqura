import { useState } from 'react';
import classes from './../../Styles/Forms/form.module.css';

const Entry2 = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const changeEmail = e => { 
        setEmail(e.target.value);
    }

    const changePassword = e => {
        setPassword(e.target.value);
    }

    
    const exit = () => {
        props.setErrorMessageEntry2('');
        props.exit();
    }

    const submit = e => {
        e.preventDefault();
        props.AuthorizationThunkCreator(email, password);
    }



    return (
        <div className={classes.form_area}>
            <div className={[classes.form_box, classes.authorization_form].join(' ')}>
                <div className={classes.header}>
                    <span>Вход</span>
                    <div className={classes.close}>
                        <button onClick={exit}></button>
                    </div>
                </div>

                <form onSubmit={submit}>
                    <label>E-mail</label>
                    <br />
                    <input spellcheck="false" onChange={changeEmail} value={email}/>
                    <br />
                    <label>Password</label>
                    <br />
                    <input spellcheck="false" onChange={changePassword} type='password' value={password}/>
                    <br />
                    <button type='submit'>Войти</button>
                    <br />
                    <span className={classes.authorization_error}>
                        {props.errorMessage ? props.errorMessage : ''}
                    </span>
                </form>

                <span className={classes.loader}>
                { props.isPending ? 'Загрузка...' : ''}
                </span>
            </div>
        </div>
    )
}

export default Entry2;