import { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [page, setPage] = useState('home')
  return (
    <>
      <Navbar page={page} onNavigate={setPage} />
      {page === 'home' && <Home />}
      {page === 'login' && <Login onNavigate={setPage} />}
      {page === 'register' && <Register onNavigate={setPage} />}
      <Footer />
    </>
  )
}

export default App
