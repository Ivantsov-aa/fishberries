import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from './navbar';

class AccountSubscriptions extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            dateRegistration: '',
            renewalRegistration: ''
        }
    }

    componentDidMount() {
        const { authUser } = this.props;
        const monthNum = authUser.dateRegistration.split('.').slice(1, 2);
        const day = authUser.dateRegistration.split('.').shift();
        const year = authUser.dateRegistration.split('.').pop();
        
        const nextMonth = +monthNum === 12 ? 1 : +monthNum + 1 
        const nextMonthNumToWord = `0${nextMonth}`;

        const month = [];
        month['01'] = 'января';
        month['02'] = 'февраля';
        month['03'] = 'марта';
        month['04'] = 'апреля';
        month['05'] = 'мая';
        month['06'] = 'июня';
        month['07'] = 'июля';
        month['08'] = 'августа';
        month['09'] = 'сентября';
        month['10'] = 'октября';
        month['11'] = 'ноября';
        month['12'] = 'декабря';
        const monthWord = month[monthNum];
        const nextMonthWord = month[nextMonthNumToWord];

        this.setState({dateRegistration: `${day + ' ' + monthWord + ', ' + year }`, renewalRegistration: `${day + ' ' + nextMonthWord + ', ' + year }`});

    }

    render() {
        const { dateRegistration, renewalRegistration } = this.state;
        const { location, authUser } = this.props;

        return (
            <>
                <NavBar location={location} authUser={authUser} />
                <section className='main__content'>
                    <div>
                        <p>Управление аккаунтом</p>
                        <h2>История подписок</h2>
                        <p className='press-to-edit'>Нажмите <Link to={`/profile/${authUser.userId}/edit-profile`}>здесь</Link>, чтобы редактировать свой аккаунт</p>
                    </div>
                    <h3>Детали подписки</h3>
                    <div className='account-details'>
                        <div>
                            <p>ID #{authUser.userId}</p>
                            <p>Дата подписки: <span>{dateRegistration}</span></p>
                            <p>Дата продления: <span>{renewalRegistration}</span></p>
                            <p>Цена: <span>{authUser.subscription === 'basic' ? '250' : '500'}₽</span></p>
                        </div>
                        <div className='subscription_links'>
                            <Link to='/subscription'>Продлить</Link>
                            <Link to='/subscription'>Сменить подписку</Link>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default AccountSubscriptions;