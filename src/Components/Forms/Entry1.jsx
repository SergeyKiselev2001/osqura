import classes from './../../Styles/Forms/form.module.css';
import google from './../../assets/images/google.jpg';
import apple from './../../assets/images/apple.png';
import vk from './../../assets/images/vk.png';
import fb from './../../assets/images/fb.jpg';
import { useState } from 'react';

const Entry1 = props => {

    const [email, setEmail] = useState('');
    const [wasFocused, setWasFocused] = useState(false);
    const [error, setError] = useState(false);

    const changeEmail = e => {
        setEmail(e.target.value);
    }

 

    const leaveFocus = () => {


        if (wasFocused && !(email).trim()) {
            setError(true);
        } else {
            setError(false);
        }
    }

    const exit = () => {
        props.exit();
    }

    const submit = e => {
        e.preventDefault();

        if (!error && wasFocused){
            props.submit(email);
        } else {
            setError(true);
        }
        
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
                    <input  spellcheck="false" onBlur={leaveFocus} onFocus={()=>setWasFocused(true)} placeholder='E-mail' onChange={changeEmail} value={email}/>
                    <br />
                    {
                        error ? <span className={classes.error}>Write your E-mail!</span> : ''
                    }
                    
                    <br />
                    <button type='submit'>Продолжить</button>
                </form>
                <span className={classes.or}>Или</span>

                <div className={classes.connectWithSocials}>
                   <a href=""><img src={google} alt="socials"/></a> 
                   <a href=""><img src={apple} alt="socials"/></a> 
                   <a href=""><img src={vk} alt="socials"/></a> 
                   <a href=""><img src={fb} alt="socials"/></a> 
                </div>

                <span className={classes.loader}>
                { props.isPending ? 'Загрузка...' : ''}
                </span>
                
                
            </div>
        </div>
    )
}

export default Entry1;