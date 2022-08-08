import React from "react";
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Link to='/' className='logo'>
                    <img src='images/header/main-logo.svg' alt='logo' />
                    <h2>Fish<span>berries</span></h2>
                </Link>
                <nav>
                    <ul>
                        <li><Link to='/'>Правила пользования</Link></li>
                        <li><Link to='/'>Соглашение на обработку данных</Link></li>
                        <li><Link to='/'>support@fishberries.ru</Link></li>
                    </ul>
                </nav>
            </footer>
        )
    }
}

export default Footer;