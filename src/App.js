import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import arrayPlaces from './store/store';

import Wrapper from './wrapper';

import RegistrationType from './components/authorization/registration-type';
import RegistrationPage from './components/authorization/registration-page';
import AuthorizationPage from './components/authorization/authorization-page';

import PrivateArea from './components/private-area/private-area';
import AccountManagement from './components/private-area/account-management';
import AccountSubscriptions from './components/private-area/account-subscriptions';
import EditProfilePage from './components/private-area/edit-profile';
import EditPlacesPage from './components/private-area/edit-places';
import FavoritePage from './components/private-area/favorite-page';

const App = () => {
  const [userId, setUserId] = useState(null);
  const [isLogged, setStateLogged] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [stateDeletePopUp, setStateDeletePopUp] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const location = useLocation();
  const navigate = useNavigate();

  let resizeWindow = () => {
    setInnerWidth(window.innerWidth);
  }

  const userIdLS = localStorage.getItem('userId');

  let arrayUsers = JSON.parse(localStorage.getItem('users'));
  if (arrayUsers === null) arrayUsers = [];

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    let arrayUsers = JSON.parse(localStorage.getItem('users'));
    if (arrayUsers === null) arrayUsers = [];

    arrayUsers.map(user => {
      if (user && user.isLogged) {
        setAuthUser(user);
        setStateLogged(true);
      }
      return user;
    });
    return () => window.removeEventListener("resize", resizeWindow);

  }, [])

  const handleLogIn = (data) => {
    console.log(data);
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

  const handleLogOut = login => {
    const isLogOutUser = arrayUsers.map(user => (
      user.login === login ? { ...user, isLogged: false } : { ...user }
    ))

    localStorage.setItem('users', JSON.stringify(isLogOutUser));

    setStateLogged(false);
    setAuthUser(null);
    navigate('/');
  }

  const registrationSubmit = data => {
    localStorage.setItem('userId', userIdLS ? +userIdLS + 1 : 1);
    const userIdToArray = localStorage.getItem('userId');

    setUserId(userIdToArray);
    arrayUsers.push({ ...data, isLogged: true, userId: userIdToArray });
    localStorage.setItem('users', JSON.stringify(arrayUsers));
    setStateLogged(true);
    setAuthUser({ ...data, isLogged: true, userId: userIdToArray });
  }

  const handleNewPersonalInfo = (data) => {
    const addPersonalInfo = { ...authUser, ...data };
    const localUsers = JSON.parse(localStorage.getItem('users'));
    const changedLocalUsers = localUsers.map(user => {
      if (user.login === addPersonalInfo.login) {
        return addPersonalInfo;
      } else {
        return user;
      }
    })

    localStorage.setItem('users', JSON.stringify(changedLocalUsers));

    setAuthUser(addPersonalInfo);
  }

  const openDeletePopUp = () => {
    setStateDeletePopUp(!stateDeletePopUp);
  }

  return (
    <div className='container'>
      <Routes>
        <Route path='*' element={<Wrapper isLogged={isLogged} authUser={authUser} arrayPlaces={arrayPlaces} location={location.pathname} innerWidth={innerWidth} />} />
        <Route path='/registration' element={<RegistrationType />} />
        <Route path='/registration/form' element={<RegistrationPage userId={userId} location={location.pathname} registrationSubmit={registrationSubmit} />} />
        <Route path='/auth' element={<AuthorizationPage navigate={navigate} handleLogIn={handleLogIn} />} />
        {isLogged &&
          <Route path='/profile/:id/*' element={
            <PrivateArea
              innerWidth={innerWidth}
              location={location.pathname}
              authUser={authUser}
              stateDeletePopUp={stateDeletePopUp}
              handleLogOut={handleLogOut}
            />
          }>
            <Route path='cabinet' element={<AccountManagement location={location.pathname} authUser={authUser} />} />
            <Route path='subscriptions' element={<AccountSubscriptions location={location.pathname} authUser={authUser} />} />
            <Route path='edit-profile' element={<EditProfilePage location={location.pathname} navigate={navigate} authUser={authUser} handleNewPersonalInfo={handleNewPersonalInfo} />} />
            <Route path='edit-places' element={<EditPlacesPage location={location.pathname} navigate={navigate} authUser={authUser} handleNewPersonalInfo={handleNewPersonalInfo} />} />
            <Route path='favorite' element={<FavoritePage innerWidth={innerWidth} authUser={authUser} arrayPlaces={arrayPlaces} stateDeletePopUp={stateDeletePopUp} openDeletePopUp={openDeletePopUp} />} />
          </Route>
        }
      </Routes>
    </div>
  );
}

export default App;
