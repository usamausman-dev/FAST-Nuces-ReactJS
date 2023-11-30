import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import LowerBlob from './components/LowerBlob'
import Products from './components/Products'
import CallToAction from './components/CallToAction'
import Navigation from './components/Navigation'


function App() {
  return (
    <>
      <div className="bg-white">
        {/* <Navbar /> */}

        <Navigation />
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <Banner />
          {/* <LowerBlob /> */}
        </div>
      </div>

      <Products />
      <CallToAction />

    </>
  )
}

export default App