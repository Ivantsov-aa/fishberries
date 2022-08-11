import React from "react";
import { Link } from 'react-router-dom';

class RegistrationType extends React.Component {
    render() {
        return (
            <section className='registration-type'>
                <h2>Создайте Ваш новый аккаунт!</h2>
                <p>Уже зарегистрированы? <Link to='/auth'>Войти</Link></p>
                <div>
                    <Link to='/registration/user' className='user'>Пользователь</Link>
                    <Link to='/registration/owner' className='owner'>Владелец места</Link>
                </div>
            </section>
        )
    }
}

export default RegistrationType;