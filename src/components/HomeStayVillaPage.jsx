import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react"; // Add missing import

// Assuming these imports work correctly
import PLANE from "../assets/PLANE.png";
import Hotels from "../assets/Hotels.png";
import HomeStayvilla from "../assets/HomeStayvilla.png";
import HolidayPackage from "../assets/HolidayPackage.png";
import Trains from "../assets/Trains.png";
import Buses from "../assets/Buses.png";
import Cabs from "../assets/Cabs.png";
import ForexCardCurrency from "../assets/ForexCardCurrency.png";
import TravelInsurance from "../assets/TravelInsurance.png";
import "./HomeStayVillaPage.css";

const OPTIONS = [
  { icon: PLANE, label: "Flights", route: "/" },
  { icon: Hotels, label: "Hotels", route: "/hotels" },
  { icon: HomeStayvilla, label: "Homestays & Villas", route: "/homestays" },
  {
    icon: HolidayPackage,
    label: "Holiday Packages",
    route: "/holiday-packages",
  },
  { icon: Trains, label: "Trains", route: "/trains" },
  { icon: Buses, label: "Buses", route: "/buses" },
  { icon: Cabs, label: "Cabs", route: "/cabs" },
  { icon: ForexCardCurrency, label: "Forex Card & Currency", route: "/forex" },
  {
    icon: TravelInsurance,
    label: "Travel Insurance",
    route: "/travel-insurance",
  },
];

const LOCATIONS = [
  "Goa, India",
  "Mumbai, India",
  "Delhi, India",
  "Bangalore, India",
  "Chennai, India",
  "Hyderabad, India",
  "Kolkata, India",
  "London, United Kingdom",
  "New York, United States",
];

const PRICE_RANGES = ["₹0-₹1500", "₹1500-₹2500", "₹2500-₹5000", "₹5000+"];

const HomeStayVillaPage = () => {
  const navigate = useNavigate();

  // Add missing state variables
  const [selectedOption, setSelectedOption] = useState("Homestays & Villas");
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [selectedPrice, setSelectedPrice] = useState(PRICE_RANGES[0]);
  const [rooms, setRooms] = useState(1); // Add missing rooms state
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [showRoomsGuests, setShowRoomsGuests] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    if (option.route) {
      navigate(option.route);
    }
  };

  const handleApplyRoomsGuests = () => {
    setShowRoomsGuests(false);
  };

  const incrementCount = (setter, value, max) => {
    if (value < max) {
      setter(value + 1);
    }
  };

  const decrementCount = (setter, value, min) => {
    if (value > min) {
      setter(value - 1);
    }
  };

  return (
    <div className="container">
      <div className="options-navbar">
        {OPTIONS.map((option) => (
          <div
            key={option.label}
            className={`option ${
              selectedOption === option.label ? "active" : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            <img src={option.icon} alt={option.label} className="icon" />
            <p>{option.label}</p>
          </div>
        ))}
      </div>
      <div className="search-box">
        {selectedOption === "Homestays & Villas" && (
          <>
            <h4>Book your ideal Homestay - Villas, Apartments & more.</h4>
            <div className="search-form">
              <div className="search-field location-field">
                <label>City, Property Name Or Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="location-select"
                >
                  {LOCATIONS.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <div className="search-field date-field">
                <label>Check-In</label>
                <input type="date" defaultValue="2024-11-28" />
                <span className="day-label">Thursday</span>
              </div>

              <div className="search-field date-field">
                <label>Check-Out</label>
                <input type="date" defaultValue="2024-11-29" />
                <span className="day-label">Friday</span>
              </div>

              <div className="search-field rooms-field">
                <label>Rooms & Guests</label>
                <div
                  className="rooms-display"
                  onClick={() => setShowRoomsGuests(!showRoomsGuests)}
                >
                  <span className="rooms-text">
                    {`${rooms} Room${rooms > 1 ? "s" : ""}, ${adults} Adult${
                      adults > 1 ? "s" : ""
                    }, ${children} Child${children > 1 ? "ren" : ""}`}
                  </span>
                  <ChevronDown className="chevron-icon" />
                </div>
                {showRoomsGuests && (
                  <div className="rooms-guests-dropdown">
                    <div className="dropdown-section">
                      <label>Rooms</label>
                      <div className="counter-control">
                        <button
                          onClick={() => decrementCount(setRooms, rooms, 1)}
                        >
                          -
                        </button>
                        <span>{rooms}</span>
                        <button
                          onClick={() => incrementCount(setRooms, rooms, 4)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="dropdown-section">
                      <label>Adults</label>
                      <div className="counter-control">
                        <button
                          onClick={() => decrementCount(setAdults, adults, 1)}
                        >
                          -
                        </button>
                        <span>{adults}</span>
                        <button
                          onClick={() => incrementCount(setAdults, adults, 10)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="dropdown-section">
                      <label>Children</label>
                      <div className="counter-control">
                        <button
                          onClick={() =>
                            decrementCount(setChildren, children, 0)
                          }
                        >
                          -
                        </button>
                        <span>{children}</span>
                        <button
                          onClick={() =>
                            incrementCount(setChildren, children, 6)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      className="apply-button"
                      onClick={handleApplyRoomsGuests}
                    >
                      APPLY
                    </button>
                  </div>
                )}
              </div>

              <div className="search-field price-field">
                <label>Price Per Night</label>
                <div
                  className="price-display"
                  onClick={() => setShowPriceDropdown(!showPriceDropdown)}
                >
                  {selectedPrice}
                  <ChevronDown className="chevron-icon" />
                </div>
                {showPriceDropdown && (
                  <div className="price-dropdown">
                    {PRICE_RANGES.map((range) => (
                      <div
                        key={range}
                        className={`price-option ${
                          selectedPrice === range ? "active" : ""
                        }`}
                        onClick={() => {
                          setSelectedPrice(range);
                          setShowPriceDropdown(false);
                        }}
                      >
                        {range}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="trending-searches">
              <span className="trending-label">Trending Searches:</span>
              <div className="trending-items">
                <span className="trending-item">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Lonavala 31 Dec 24 to 1 Jan 25
                  </a>
                </span>
              </div>
            </div>

            <button className="search-button">SEARCH</button>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeStayVillaPage;
