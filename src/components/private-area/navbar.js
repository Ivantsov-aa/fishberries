import React from 'react';
import { Link } from 'react-router-dom';

const navBar = [
    {
        id: 1,
        value: 'cabinet',
        name: 'Личный кабинет'
    },
    {
        id: 2,
        value: 'favorite',
        name: 'Избранное'
    },
    {
        id: 3,
        value: 'subscriptions',
        name: 'Подписки'
    },
    {
        id: 4,
        value: 'support',
        name: 'Поддержка'
    },
    {
        id: 5,
        value: 'edit-places',
        name: 'Редактировать места'
    },
    {
        id: 6,
        value: 'edit-profile',
        name: 'Редактировать профиль'
    },
    {
        id: 7,
        value: 'create-owner-place',
        name: 'Создать профиль владельца места'
    },
    {
        id: 8,
        value: 'info-about-users',
        name: 'Информация о пользователях'
    }
];

class NavBar extends React.Component {
    render() {
        const { location, authUser } = this.props;
        const currentLocation = location.split('/').pop();

        return (
            <nav>
                <ul>
                    {navBar.map((nav, i) => (
                        <Link
                            to={`/profile/${authUser.userId}/${nav.value}`}
                            key={i}
                        ><li
                            className={`${nav.value} ${nav.value === currentLocation ? 'active' : ''}`}
                        >{nav.name}</li></Link>
                    ))}
                </ul>
            </nav>
        )
    }
}

export default NavBar;