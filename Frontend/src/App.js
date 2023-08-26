import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UpcomingTrips from './UpcomingTrips';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/upcomingtrips' element={<UpcomingTrips/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;

