import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Weather from './Weather'
import ApiFetchCheck from './ApiFetchCheck'

function App() {
  // const [searchValue, setSearchvalue] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home weatherData={weatherData} setWeatherData={setWeatherData} />} />
          <Route path='/weather' element={<Weather weatherData={weatherData} setWeatherData={setWeatherData} />} />
          <Route path='/check' element={<ApiFetchCheck />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
