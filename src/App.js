import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';
import CartScreen from './pages/CartScreen';

// components
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      {/* navbar */}
      <Navbar />
      <div className='container'>
        <main>
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route exact path='/product/:id' element={<ProductScreen />} />
            <Route exact path='/cart' element={<CartScreen />} />
          </Routes>
        </main>
        {/* homeScreen */}
        {/* product Screen  */}
        {/* cart Screen */}
      </div>
    </Router>
  );
}

export default App;
