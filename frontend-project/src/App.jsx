import './App.css'
import About from './component/About'
import Calculator from './component/Calculator';
import Card from './component/Card'
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './component/Todo';
import Rockpaperscissor from './component/Rockpaperscissor';
import LoanCalculator from './component/LoanCalculator';
import Weather from './component/Weather';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/card' element={<Card />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/Todolist' element={<Todo />} />
          <Route path='/RockPaperScissor' element={<Rockpaperscissor />} />
          <Route path='/LoanCalculator' element={<LoanCalculator />} />
          <Route path='/Weather' element={<Weather />} />
        </Routes>
        {/* <WeatherExample /> */}
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
