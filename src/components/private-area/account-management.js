import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from './navbar';

class AccountManagement extends React.Component {
    render() {
        const { location, authUser } = this.props;

        return (
            <>
                <NavBar location={location} authUser={authUser} />
                <section className='main__content'>
                    <div>
                        <p>Управление аккаунтом</p>
                        <h2>Ваш профиль</h2>
                        <p className='press-to-edit'>Нажмите <Link to={`/profile/${authUser.userId}/edit-profile`}>здесь</Link>, чтобы редактировать свой аккаунт</p>
                    </div>
                    <h3>Детали аккаунта</h3>
                    <div className='account-details'>
                        <div>
                            <p>Персональная информация</p>
                            <p>Email: <span>{authUser.mail}</span></p>
                            <p>Отображаемое имя: <span>{authUser.login}</span></p>
                            <p>Имя: <span>{authUser.name}</span></p>
                        </div>
                        <div>
                            <p>История профиля</p>
                            <p>Создан: <span>{authUser.dateRegistration}</span></p>
                            <p>Оплаченные подписки: <span>1</span></p>
                            <p>Имя: <span>{authUser.subscription}</span></p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default AccountManagement;