import { Routes, Route, useLocation } from 'react-router-dom';

import arrayPlaces from './store/store';

import Header from './components/header';
import Main from './components/main';
import PlaceCart from './components/placecart/place-cart';
import Subscription from './components/subscription/subscription';
import Contact from './components/contact/contact';

const App = () => {

  const location = useLocation();

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Main arrayPlaces={arrayPlaces} />} />
        <Route path='/places/:place' element={<PlaceCart arrayPlaces={arrayPlaces} location={location.pathname} />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/registration' element={<Registration />} /> */}
      </Routes>
    </div>
  );
}

export default App;
