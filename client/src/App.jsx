import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signout from './pages/Signup'
import Signup from './pages/Signup'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreateListings from './pages/CreateListings'
import UpdateListing from './pages/UpdateListing'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<Signin/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      <Route path="/about" element={<About/>}/>
      <Route element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/create-listing" element={<CreateListings/>}/>
      <Route path="/update-listing/:listingId" element={<UpdateListing/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
