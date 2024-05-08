import { useState } from 'react'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
