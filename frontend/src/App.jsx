import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import MyAppointment from './pages/MyAppointment';
import Appointment from './pages/Appointment';
import RootLayout from './Layouts/RootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />}/>
    <Route path="/doctors/:specialty" element={<Doctors/>}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/my-profile" element={<MyProfile />}/>
    <Route path="/my-appointment" element={<MyAppointment/>}/>
    <Route path="/appointment/:docId" element={<Appointment/>}/>
    </Route>
  ));
  return <RouterProvider router={router} />
}

export default App
