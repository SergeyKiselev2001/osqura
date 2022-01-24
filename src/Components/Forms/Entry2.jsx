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
        props.exit();
    }

    const submit = e => {
        e.preventDefault();
        props.AuthorizationThunkCreator(email, password);
    }


    return (
        <div className={classes.form_area}>
            <div className={classes.form_box}>
                <div className={classes.header}>
                    <span>Вход</span>
                    <button onClick={exit}>EXIT</button>
                </div>

                <form onSubmit={submit}>
                    <label>Email</label>
                    <br />
                    <input onChange={changeEmail} value={email}/>
                    <br />
                    <input onChange={changePassword} type='password' value={password}/>
                    <br />
                    <button type='submit'>Войти</button>
                    <br />
                    <span>
                        {props.errorMessage ? props.errorMessage : 'ничего'}
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