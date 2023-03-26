import React from 'react'
import Button from './components/element/button'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Main from './main'

export default function Home() {
  return (
    <div>
      <Navbar className='' />
      <div>
        <Main className='' />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
