import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import arrayPlaces from './store/store';

import Wrapper from './wrapper';
import RegistrationType from './components/authorization/registration-type';
import RegistrationPage from './components/authorization/registration-page';
import AuthorizationPage from './components/authorization/authorization-page';
import PrivateArea from './components/private-area/private-area';

const App = () => {
  const [userId, setUserId] = useState(null);
  const [isLogged, setStateLogged] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const userIdLS = localStorage.getItem('userId');

  let arrayUsers = JSON.parse(localStorage.getItem('users'));
  if (arrayUsers === null) arrayUsers = [];

  useEffect(() => {
    let arrayUsers = JSON.parse(localStorage.getItem('users'));
    if (arrayUsers === null) arrayUsers = [];

    arrayUsers.map(user => {
      if (user && user.isLogged) {
        setAuthUser(user);
        setStateLogged(true);
      }
      return user;
    })
  }, [])

  const handleLogIn = (data) => {
    const isLogInUser = arrayUsers.map(user => (
      user.login === data.login ?
        { ...user, isLogged: true }
        :
        { ...user, isLogged: false }
    ))

    localStorage.setItem('users', JSON.stringify(isLogInUser));

    setStateLogged(true);
    setAuthUser(data);
  }

  const registrationSubmit = data => {
    localStorage.setItem('userId', userIdLS ? +userIdLS + 1 : 1);
    const userIdToArray = localStorage.getItem('userId');

    setUserId(userIdToArray);
    arrayUsers.push({ ...data, isLogged: true, userId: userIdToArray });
    localStorage.setItem('users', JSON.stringify(arrayUsers));
    setStateLogged(true);
  }

  return (
    <div className='container'>
      <Routes>
        <Route path='*' element={<Wrapper isLogged={isLogged} authUser={authUser} arrayPlaces={arrayPlaces} location={location.pathname} />} />
        <Route path='/registration' element={<RegistrationType />} />
        <Route path='/registration/form' element={<RegistrationPage userId={userId} location={location.pathname} registrationSubmit={registrationSubmit} />} />
        <Route path='/auth' element={<AuthorizationPage navigate={navigate} handleLogIn={handleLogIn} />} />
        {isLogged &&
          <Route path='/profile/:id' element={<PrivateArea location={location.pathname} authUser={authUser} />} />
        }
      </Routes>
    </div>
  );
}

export default App;
