import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import AboutUs from './components/Home/About.jsx' // Corrected path
import Contact from './components/Contact/Contact.jsx'
import Events from './components/Events/Events.jsx'
import Description from './components/Events/Description.jsx'
import Speakers from './components/Speakers/Speakers.jsx'
import Sponsors from './components/Sponsors/Sponsors.jsx'
import Register from './components/Register/Register.jsx'
import Privacy from './components/Legal/Privacy.jsx'
import TnC from './components/Legal/TnC.jsx'
import Refund from './components/Legal/Refund.jsx'
import Faqs from './components/Faqs/Faqs.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutUs />} /> {/* Corrected path */}
      <Route path='/events' element={<Events />} />
      <Route path='/description' element={<Description/>} />
      <Route path='/speakers' element={<Speakers />} />
      <Route path='/sponsors' element={<Sponsors />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/tnc' element={<TnC />} />
      <Route path='/refund' element={<Refund />} />
      <Route path='/faqs' element={<Faqs />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

