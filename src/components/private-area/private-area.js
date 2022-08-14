import React from 'react';
import { Link, Outlet } from 'react-router-dom';

class PrivateArea extends React.Component {
    handleClickLogOut = login => {
        const { handleLogOut } = this.props;
        handleLogOut(login);
    }

    render() {
        const { location, authUser, stateDeletePopUp } = this.props;
        const currentLocation = location.split('/').pop();

        return (
            authUser &&
            <div className={`personal-area__wrapper ${stateDeletePopUp ? 'disable' : ''}`}>
                <header>
                    <div className='header__mail-row'>
                        <p>support@fishberries.ru</p>
                    </div>
                    <div className='header__container'>
                        <Link to='/' className='logo'>
                            <img src='/images/header/main-logo.svg' alt='logo' />
                            <h2>Fish<span>berries</span></h2>
                        </Link>
                    </div>
                </header>
                <main className='personal-area__container'>
                    <div className='personal-area__title'>
                        <div className='personal-area__user'>
                            <div className='title_img'>
                                <p>Аватар</p>
                                <img src={authUser.userPhoto} alt='user' />
                            </div>
                            <div className='title_info'>
                                <h1>{authUser.name ? authUser.name : authUser.login}</h1>
                                <p>Не вы? <button onClick={() => this.handleClickLogOut(authUser.login)}>Выйти</button></p>
                            </div>
                        </div>
                        {currentLocation === 'favorite' &&
                            <div className='favorite__title'>
                                <h2>Избранное</h2>
                                <p><Link to={`/profile/${authUser.userId}/cabinet`}>Вернуться</Link> в личный кабинет</p>
                            </div>
                        }
                    </div>
                    <div className='personal-area__main'>
                        <Outlet />
                    </div>
                </main>
            </div>
        )
    }
}

export default PrivateArea;