import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/header/Navbar';
import Home from './pages/1.home/Home';
import Service from './pages/2.services/Service';
import Portfolio from './pages/3.portfolio/Portfolio';
import Contact from './pages/4.contact/Contact';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div>
      <Router>
          <Navbar />
          <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          </Routes>

          <Footer />

      </Router>
    </div>
  )
}

export default App