import React from 'react'
import {  Banner, CallToAction, Products } from '../components'

export default function Home() {
  return (
    <>
      <div className="bg-white">
       
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <Banner />
        </div>
      </div>

      <Products />
      <CallToAction />

    </>
  )
}
