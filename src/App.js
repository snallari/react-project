//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Highlights from './components/Highlights';
import Main from './components/Main';
import Profile from './components/Profile';
import Footer from './components/Footer';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingTable from './components/Bookings/BookingTable';
import BookingConfirmation from './components/Bookings/BookingConfirmation';


function App() {
  return (
    // <div className='home'>
    // <Header></Header>
    // <Main></Main>
    // <Highlights></Highlights>
    // <Profile></Profile>
    // <Main></Main>
    // <Footer></Footer>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="reserve" element={<BookingTable/>} />
        <Route path="bookingconfirm" element={<BookingConfirmation/>} />
        <Route path="about" element={<Main/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="footer" element={<Footer/>} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
