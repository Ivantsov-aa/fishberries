import React from "react";
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <nav>
                    <ul>
                        <li><Link to='/'>Правила пользования</Link></li>
                        <li><Link to='/'>Соглашение на обработку данных</Link></li>
                        <li><Link to='/'>support@fishberries.ru</Link></li>
                    </ul>
                </nav>
                <p>2022 © Fishberries Inc.</p>
            </footer>
        )
    }
}

export default Footer;