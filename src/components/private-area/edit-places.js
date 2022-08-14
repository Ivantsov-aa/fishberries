import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from './navbar';

class EditPlacesPage extends React.Component {
    render() {
        const { location, authUser } = this.props;

        return (
            <>
                <NavBar location={location} authUser={authUser} />
                <section className='main__content'>
                    <div>
                        <p>Управление аккаунтом</p>
                        <h2>Редактировать места</h2>
                        <p className='press-to-edit'>Нажмите <Link to={`/profile/${authUser.userId}/edit-profile`}>здесь</Link>, чтобы редактировать свой аккаунт</p>
                    </div>
                    <h3>Ваши места</h3>
                    <div className='places-table__wrapper'>
                        <div className='places-table'>
                            <table>
                                <thead>
                                    <tr>
                                        <th><p>Места</p></th>
                                        <th><p>Статус</p></th>
                                        <th><p>Дата</p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ихтиолог</td>
                                        <td><button>Редактировать</button></td>
                                        <td>29.09.22</td>
                                    </tr>
                                    <tr>
                                        <td>Раменский (Гжелка)</td>
                                        <td><button disabled>Редактировать</button></td>
                                        <td>02.09.22</td>
                                    </tr>
                                    <tr>
                                        <td>Белая дача</td>
                                        <td><button disabled>Редактировать</button></td>
                                        <td>29.08.22</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default EditPlacesPage;