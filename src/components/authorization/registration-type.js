import React from "react";
import { Link } from 'react-router-dom';

class RegistrationType extends React.Component {
    render() {
        return (
            <section className='registration-type'>
                <h2>Создайте Ваш новый аккаунт!</h2>
                <p>Уже зарегистрированы? <Link to='/auth'>Войти</Link></p>
                <Link to='/registration/form'>Зарегистрироваться</Link>
                <p className='caption'>Вы владелец рыбного места? Отправьте заявку на <a href='mailto:support@fishberries.ru'>support@fishberries.ru</a></p>
            </section>
        )
    }
}

export default RegistrationType;