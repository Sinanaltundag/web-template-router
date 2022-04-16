
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CardDetail from './components/CardDetail';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div className="wrapper">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/cardDetail" element={<CardDetail/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
<Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
