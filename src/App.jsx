import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import HotelsPage from './components/HotelsPage';
import HomeStayVillaPage from './components/HomeStayVillaPage';
import HolidayPackagesPage from './components/HolidayPackagesPage';
import TrainsPage from './components/TrainsPage';
import BusesPage from './components/BusesPage';
import CabsPage from './components/CabsPage';
import { FlightCard } from './components/FlightCard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/homestays" element={<HomeStayVillaPage />} />
        <Route path="/holiday-packages" element={<HolidayPackagesPage />} />  
        <Route path="/trains" element={<TrainsPage />} />  
        <Route path="/buses" element={<BusesPage />} /> 
        <Route path="/cabs" element={<CabsPage />} /> 
        <Route path="/flight-card" element={<FlightCard />} /> {/* Flights Output Page */}

        {/* You can add more routes for other pages if needed */}
      </Routes>
    </Router>
  );
}

export default App;