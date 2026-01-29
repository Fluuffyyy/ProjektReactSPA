import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Games from './Pages/Games.jsx'
import NotFound from './Pages/notFound.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navigation from './Navigation.jsx/Navigation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route index element = {<App/>} />
      <Route path = "About" element={<About/>} />
      <Route path = "Games" element={<Games/>} />
      <Route path = "Contact" element={<Contact/>} />
      <Route path = "*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
