import React from "react";
import { Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Main from './components/main';
import PlaceCart from './components/placecart/place-cart';
import Subscription from './components/subscription/subscription';
import Contact from './components/contact/contact';

class Wrapper extends React.Component {
    render() {
        const { isLogged, authUser, arrayPlaces, location } = this.props;

        return (
            <>
                <Header isLogged={isLogged} authUser={authUser} />
                    <Routes>
                        <Route path='/' element={<Main arrayPlaces={arrayPlaces} />} />
                        <Route path='/places/:place' element={<PlaceCart arrayPlaces={arrayPlaces} location={location} />} />
                        <Route path='/subscription' element={<Subscription />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
            </>
        )
    }
}

export default Wrapper;
