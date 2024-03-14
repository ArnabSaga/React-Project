import { useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'

function App() {

  return (
    <div className='w-full h-screen bg-zinc-900'>
      <Navbar />
      <LandingPage />
    </div>
  )
}

export default App
