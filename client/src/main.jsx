import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Events from './components/Events/Events.jsx'
import Speakers from './components/Speakers/Speakers.jsx'
import Sponsers from './components/Sponsers/Sponsers.jsx'
import Register from './components/Register/Register.jsx'
import ScrollToTop from './components/Header/ScrollToTop';
import Privacy from './components/Legal/Privacy.jsx'
import TnC from './components/Legal/TnC.jsx'
import Refund from './components/Legal/Refund.jsx'
// import Register from './components/Register/Register.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/events' element={<Events />} />
      <Route path='/speakers' element={<Speakers />} />
      <Route path='/sponsers' element={<Sponsers />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='/tnc' element={<TnC />} />
      <Route path='/refund' element={<Refund />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

