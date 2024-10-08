import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Buses from './pages/Buses';
import BusResult from './pages/BusResult';
import Product from './pages/Product';
import Trains from './pages/Trains';
import TrainForm from './components/TrainForm';
import TrainResults from './pages/TrainResults';
import Flights from './pages/Flights';
import FlightBookingConfirmation from './pages/FlightBookingConfirmation';
import Vacation from './pages/Vacation';
import TrackTicket from './pages/TrackTicket';

import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';

import SearchBar from './components/SearchBar';
import Offers from './pages/Offers';
import Hotels from './pages/Hotels';
import BookingForm from './components/NewHotels/BookingForm';
import HotelMenu from './components/HotelMenu';
import BookingPage from './components/Bookingpage';
import HotelBookTrack from './pages/HotelBookTrack';
import HotelPage from './components/NewHotels/HotelPage';
import FlightBooking from './components/newflight/FlightForm';
import FlightList from './components/newflight/FlightList';
import Loginpage from './components/Loginpage';

import Signup from './pages/Signup';




const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      
      <SearchBar />
      <Routes>
        <Route path='/' element={<Buses />} />
        <Route path="/results" element={<BusResult />} />
        <Route path='/Trains' element={<Trains />} />
        <Route path="/TrainForm" element={<TrainForm />} />
        <Route path="/TrainResult" element={<TrainResults />} />
        <Route path="/FlightBooking" element={<FlightBooking/>}/>
        <Route path='/login' element={<Loginpage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/Flights' element={<Flights />} />
        <Route path="/FlightList" element={<FlightList />} />
        <Route path="/confirmation" element={<FlightBookingConfirmation />} />
        <Route path='/Vacation' element={<Vacation />} />
        <Route path='/Offers' element={<Offers />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
        <Route path="/bookings" component={BookingForm} />
        <Route path="/HotelMenu" element={<HotelMenu />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/hotelbooktrack" element={<HotelBookTrack />} /> {/* Add route for HotelBookTrack */}
        <Route path='/TrackTicket' element={<TrackTicket />} />
        
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      
    </div>
  );
};

export default App;
