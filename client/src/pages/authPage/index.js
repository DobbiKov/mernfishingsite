import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ModalError } from './modal-error';
import './style.css';

export const AuthPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [isReg, setIsReg] = useState(false);

    const loginChangeHandler = event => {
        setLogin(event.target.value);
    }
    const passwordChangeHandler = event => {
        setPassword(event.target.value);
    }
    const clickButtonHandler = async event => {
        setIsError(true);
        var obj = {
            login, password
        };
        const res = await fetch('http://localhost:5000/api/auth/auth', {method: 'POST', body: JSON.stringify(obj), headers: {"Content-Type" : "application/json"}});
        const data = await res.json();
        console.log(data);
    }
    const regClickHandler = event => {
        setIsReg(true);
    }
    if(isReg == true){
        return( <Redirect to="/register"/> );
    }
    else{
        return(
            <div className="auth-page">
                <div className="auth-page-inner">
                    <div className="h1">
                        <h1>Дистанционное обучение</h1>
                    </div>
                    <div className="nav">
                        <nav>
                            <Link to="/main" className="nav-to-main">В начало</Link>
                            <span className="span-triangle">►</span>
                            <p className="p-sign-in">Вход на сайт</p>
                        </nav>
                    </div>
                    <div className="main">
                        <div className="main-inner">
                            <div className="main-auth">
                                <div className="main-auth-h1 main-auth-inner">
                                    <h2>Вход</h2>
                                </div>
                                <div className="main-auth-error main-auth-inner">
                                    <ModalError isIS={isError}/>
                                </div>
                                <div className="main-auth-inputs main-auth-inner">
                                    <div className="main-auth-input">
                                        <p>Логин</p><input type="input" value={login} placeholder="" onChange={loginChangeHandler}/>
                                    </div>
                                    <div className="main-auth-input main-auth-input-reg">
                                        <p>Пароль</p><input type="input" value={password} placeholder="" onChange={passwordChangeHandler}/>
                                    </div>
                                </div>
                                <div className="main-auth-remember-me main-auth-inner">
                                    <input type="checkbox"/> <p>Запомнить логин</p>
                                </div>
                                <div className="main-auth-sign-in-button main-auth-inner">
                                    <input type="submit" value="Вход" onClick={clickButtonHandler} />
                                </div>
                                <div className="main-auth-other main-auth-inner">
                                    <Link to="/change-pass" className="change-pass">Забыли логин или пароль?</Link>
                                    <p>В Вашем браузере должен быть разрешен прием cookies<img src="http://www.distant.ttiip.ru/theme/image.php/more/core/1589372645/help" alt="Справка по использованию элемента «В Вашем браузере должен быть разрешен прием cookies»" class="iconhelp"/></p>
                                </div>
                            </div>
                            <div className="main-reg">
                                <div className="main-reg-inner">
                                    <h2>Вы в первый раз на нашем сайте?</h2>
                                </div>
                                <div className="main-reg-inner">
                                    <p>Для полноценного доступа к этому сайту Вам необходимо сначала создать учетную запись.</p>
                                </div>
                                <div className="main-reg-inner">
                                    <input type="submit" value="Создать учетную запись" onClick={regClickHandler}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-you-use-guest">
                        <p>Вы используете гостевой доступ</p>
                        <Link to="/main" className="nav-to-main-guest">В начало</Link>
                    </div>
                </div>
            </div>
        )
    }
} 
{/* <h1>
Auth
</h1>
<input type="input" value={login} placeholder="login" onChange={loginChangeHandler}/>
<input type="input" value={password} placeholder="password" onChange={passwordChangeHandler}/>
<input type="submit" value="Авторизоватся" onClick={clickButtonHandler} /> */}