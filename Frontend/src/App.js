import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UpcomingTrips from './UpcomingTrips';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/upcomingtrips' element={<UpcomingTrips/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/upcomingtrip' element={<UpcomingTrips/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;

