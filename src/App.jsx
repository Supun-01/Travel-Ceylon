import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'


import HeroSectionPage from './components/HomePageComp/HeroSectionPage'
import BookingComp from './components/BookingComp/BookingComp'
import BookingPage from './components/BookingPage/BookingPage'
import ContactUs from './components/ContactUsComponets/ContactUs'
import PaymentForm from './components/PaymentComponents/PaymentForm'

function App() {
  return (
    <div>
      <NavBar />

      <div className='py-5 px-5 lg:px-20 lg:py-4'>
        <Routes>
          <Route path='/' element={<HeroSectionPage />} />
          <Route path='/BookingComp' element={<BookingComp />} />
          <Route path='/BookingPage' element={<BookingPage />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/PaymentForm' element={<PaymentForm />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
