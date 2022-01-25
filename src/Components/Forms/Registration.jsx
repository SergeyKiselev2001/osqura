import { useState } from 'react';
import classes from './../../Styles/Forms/form.module.css';

const Registration = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const changeEmail = e => { 
        setEmail(e.target.value);
    }

    const changePassword = e => {
        setPassword(e.target.value);
    }

    const changeName = e => { 
        setName(e.target.value);
    }

    const changePhone = e => {
        setPhone(e.target.value);
    }

    
    const exit = () => {
        props.setErrorMessageRegistration('');
        props.exit();
    }

    const addUser = e => {
        e.preventDefault();
        props.addUserThunkCreator(name, phone, email, password);
    }

    return (
        <div className={classes.form_area}>
            <div className={[classes.form_box, classes.registration_form].join(' ')}>
                <div className={classes.header}>
                    <span>Регистрация</span>
                    <div className={classes.close}>
                        <button onClick={exit}></button>
                    </div>
                </div>

                <form onSubmit={addUser}>
                    <label>Email</label>
                    <br />
                    <input spellcheck="false" onChange={changeEmail} value={email}/>
                    <br />
                    <label>Пароль</label>
                    <br />
                    <input spellcheck="false" onChange={changePassword} type='password' value={password}/>
                    <br />
                    <label>Имя Фамилия</label>
                    <br />
                    <input spellcheck="false" onChange={changeName} value={name}/>
                    <br />
                    <label>Телефон</label>
                    <br />
                    <input spellcheck="false" onChange={changePhone} type='tel' value={phone}/>
                    <br />
                    <button type='submit'>Создать аккаунт</button>
                    <br />
                    <span className={classes.registration_error}>
                        {props.errorMessage ? props.errorMessage : ''}
                    </span>
                </form>

                <span className={classes.agree}>
                    Нажимая на &laquo;Создать аккаунт&raquo;, вы соглашаетесь с <a href="">Политикой обработки данных.</a>
                </span>

                <span className={classes.loader}>
                { props.isPending ? 'Загрузка...' : ''}
                </span>
            </div>
        </div>
    )
}

export default Registration;