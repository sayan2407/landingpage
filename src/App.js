import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Homesections from './Components/Homesections/Homesections';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homesections/>} ></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
