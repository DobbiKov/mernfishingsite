import React from 'react';
import './style.css';

export const ModalError = ({isIS}) => {
    if(isIS == false)
        return null;
    return(
        <span class="error"><img class="icon icon-pre" alt="Ошибка" src="http://www.distant.ttiip.ru/theme/image.php/more/core/1589372645/i/warning"/>Неверный логин или пароль, попробуйте заново.</span>
    )
}
