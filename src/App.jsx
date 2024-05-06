import { useState } from 'react'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HomePage/>
      <Footer />
    </>
  )
}

export default App
