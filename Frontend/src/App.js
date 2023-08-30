import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UpcomingTrips from './UpcomingTrips';
import Homepage from './Homepage';
import HeroSection from './HeroSection';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HeroSection/>}></Route>
      <Route path='/homepage' element={<Homepage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/upcomingtrips' element={<UpcomingTrips/>}></Route>
      
      <Route path='/upcomingtrip' element={<UpcomingTrips/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;

