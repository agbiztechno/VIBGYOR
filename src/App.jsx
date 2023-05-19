// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './componants/Header/Header';
import Footer from './componants/Footer/Footer2';
import Home from './componants/Home/Home';
import About from './componants/About/About';
import ContactUs from './componants/Contact-Us/ContactUs';
import Gallary from './componants/Gallary/Gallary';
import Careers from './componants/Careers/Careers';
import OnlineApplication from './componants/OnlineApplication/OnlineApplication';
import Apply from './componants/Apply-Now/Apply';
function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About-Us' element={<About />} />
        <Route path='/Contact-Us' element={<ContactUs/>}/>
        <Route path='/Gallary' element={<Gallary />} />
        <Route path='/Online-Application' element={<OnlineApplication />} />
        <Route path='/Careers' element={<Careers />} />
      </Routes>
      <Apply />
      <Footer />
    </div>
  )
}

export default App
