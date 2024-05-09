import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'

const Navbar = lazy(() => import('./components/Navbar'))
const Footer = lazy(() => import('./pages/Footer'))
const HomePage = lazy(() => import('./pages/HomePage'))
const Login = lazy(() => import('./pages/Login'))
const Signup = lazy(() => import('./pages/Signup'))
const About = lazy(() => import('./pages/About'))
const Menu = lazy(() => import('./pages/Menu'))
const Recipes = lazy(() => import('./pages/Recipes'))


function App() {

  return (
    <Suspense fallback={ <span class="loader"></span>}>
      <Navbar />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/recipes' element={<Recipes />} />
      </Routes>
      <Footer />
    </Suspense>
  )
}

export default App
