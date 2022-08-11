import { Routes, Route, useLocation } from 'react-router-dom';

import arrayPlaces from './store/store';

import Wrapper from './wrapper';
import RegistrationType from './components/authorization/registration-type';
import RegistrationPage from './components/authorization/registration-page';

const App = () => {

  const location = useLocation();

  return (
    <div className='container'>
      <Routes>
        <Route path='*' element={<Wrapper arrayPlaces={arrayPlaces} location={location.pathname} />} />
        <Route path='/registration' element={<RegistrationType />} />
        <Route path='/registration/*' element={<RegistrationPage location={location.pathname} />} />
      </Routes>
    </div>
  );
}

export default App;
