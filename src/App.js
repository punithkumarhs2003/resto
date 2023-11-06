import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import LandingPage from './Pages/LandingPage';
import MenuPage from './Pages/MenuPage';
import Cart from './Pages/Cart';


function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/menu' element={<MenuPage />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
