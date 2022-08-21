import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from './navbar';

class PrivateArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stateHamburgerMenu: false
        }
    };

    handleHamburgerButtonClick = () => {
        this.setState({ stateHamburgerMenu: !this.state.stateHamburgerMenu });
    }

    handleClickLogOut = login => {
        const { handleLogOut } = this.props;
        handleLogOut(login);
    }

    render() {
        const { stateHamburgerMenu } = this.state;
        const { location, authUser, stateDeletePopUp, innerWidth } = this.props;
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
                        {innerWidth < 1024 &&
                            <>
                                <button className={`hamburger-button ${stateHamburgerMenu ? 'open' : ''}`} onClick={this.handleHamburgerButtonClick}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                <div className={`hamburger-menu ${stateHamburgerMenu ? 'open' : ''}`}>
                                    <NavBar handleHamburgerButtonClick={this.handleHamburgerButtonClick} location={location} authUser={authUser} />
                                </div>
                            </>
                        }
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