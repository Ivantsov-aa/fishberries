import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        const { authUser, isLogged } = this.props;

        return (
            <header>
                <div className='header__mail-row'>
                    <p>support@fishberries.ru</p>
                </div>
                <div className='header__nav'>
                    <Link to='/' className='logo'>
                        <img src='/images/header/main-logo.svg' alt='logo' />
                        <h2>Fish<span>berries</span></h2>
                    </Link>
                    <nav>
                        <ul>
                            <li><Link to='/'>Домой</Link></li>
                            <li><Link to='/subscription'>Подписка</Link></li>
                            <li><Link to='/contact'>Контакт</Link></li>
                        </ul>
                    </nav>
                    {isLogged ?
                        <Link to={`/profile/${authUser.userId}/cabinet`} className='private-area__button'>{authUser.name ? authUser.name : authUser.login}</Link>
                        :
                        <div className='header_buttons'>
                            <Link to='/auth' className='authorization'>Войти</Link>
                            <Link to='/registration' className='registration'>Регистрация</Link>
                        </div>
                    }
                </div>
            </header>
        )
    }
}

export default Header;