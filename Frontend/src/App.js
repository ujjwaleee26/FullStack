import React from 'react';
import Login from './LoginPage/Login';
import SignUp from './SignUpPage/SignUp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UpcomingTrips from './UpcomigContent/UpcomingTrips';
import Homepage from './UserDashBoard/Homepage';
import HeroSection from './IntroPage/HeroSection';
import O from './UpcomigContent/O';
import ChatRoom from './UpcomigContent/ChatRoom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HeroSection/>}></Route>
      <Route path='/otp' element={<O/>}></Route>
      <Route path='/chatroom' element={<ChatRoom/>}></Route>
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

