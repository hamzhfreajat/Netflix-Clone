import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/banner/Banner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner /> 
      <Routes>
         <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
