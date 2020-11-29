import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
    return(
        <header>
            <div className="header-inner">
                <Link to="/main" className="e-learning" title="в начало">E-learning</Link>
                <p className="you-use-guest">Вы используете гостевой доступ(<Link to="/auth" className="you-use-guest-link">Войти</Link>)</p>
            </div>
        </header>
    )
}
