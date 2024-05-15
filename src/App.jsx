import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'


const Navbar = lazy(() => import('./components/Navbar'))
const Footer = lazy(() => import('./pages/Footer'))
const HomePage = lazy(() => import('./pages/HomePage'))
const Login = lazy(() => import('./pages/Login'))
const Signup = lazy(() => import('./pages/Signup'))
const About = lazy(() => import('./pages/About'))
const Menu = lazy(() => import('./pages/Menu'))
const Recipes = lazy(() => import('./pages/Recipes'))
const NotFound = lazy(()=> import('./pages/NotFound'))


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='' element={ <Suspense fallback={<h1>Loadin...</h1>}> <HomePage /> </Suspense>} />
        <Route path='/login' element={<Suspense fallback={<h1 className="h-screen m-auto">Loadin...</h1>}> <Login /></Suspense>} />
        <Route path='/signup' element={<Suspense fallback={<h1 className="h-screen m-auto">Loadin...</h1>}><Signup /> </Suspense>} />
        <Route path='/about' element={<Suspense fallback={<h1 className="h-screen m-auto">Loadin...</h1>}><About /></Suspense>} />
        <Route path='/menu' element={ <Suspense fallback={<h1  className="h-screen m-auto">Loadin...</h1>}><Menu /></Suspense>} />
        <Route path='/recipes' element={ <Suspense fallback={<h1  className="h-screen m-auto">Loadin...</h1>}><Recipes /></Suspense>} />
        <Route path='*' element={ <Suspense fallback={<h1  className="h-screen m-auto">Loadin...</h1>}> <NotFound /> </Suspense>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
