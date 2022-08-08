import { Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
