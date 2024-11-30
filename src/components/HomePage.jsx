import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PLANE from "../assets/PLANE.png";
import Hotels from "../assets/Hotels.png";
import HomeStayvilla from "../assets/HomeStayvilla.png";
import HolidayPackage from "../assets/HolidayPackage.png";
import Trains from "../assets/Trains.png";
import Buses from "../assets/Buses.png";
import Cabs from "../assets/Cabs.png";
import ForexCardCurrency from "../assets/ForexCardCurrency.png";
import TravelInsurance from "../assets/TravelInsurance.png";
import "./HomePage.css";

const OPTIONS = [
    { icon: PLANE, label: "Flights", route: "/" },
    { icon: Hotels, label: "Hotels", route: "/hotels" },
    { icon: HomeStayvilla, label: "Homestays & Villas", route: "/homestays" },
    { icon: HolidayPackage, label: "Holiday Packages", route: "/holiday-packages" },
    { icon: Trains, label: "Trains", route: "/trains" },
    { icon: Buses, label: "Buses", route: "/buses" },
    { icon: Cabs, label: "Cabs", route: "/cabs" },
    { icon: ForexCardCurrency, label: "Forex Card & Currency", route: "/forex" },
    { icon: TravelInsurance, label: "Travel Insurance", route: "/travel-insurance" },
];

const TRIP_TYPES = ["One Way", "Round Trip", "Multi City"];

const CITIES = [
    { name: "Delhi", code: "DEL", fullName: "Delhi Airport India" },
    { name: "Bengaluru", code: "BLR", fullName: "Bengaluru International Airport" },
    { name: "Mumbai", code: "BOM", fullName: "Chhatrapati Shivaji Maharaj International Airport" },
    { name: "Chennai", code: "MAA", fullName: "Chennai International Airport" },
    { name: "Kolkata", code: "CCU", fullName: "Netaji Subhas Chandra Bose International Airport" },
];

const HomePage = () => {
    const [selectedOption, setSelectedOption] = useState("Flights");
    const navigate = useNavigate();
    const [selectedTripType, setSelectedTripType] = useState("Round Trip");
    const [from, setFrom] = useState("Delhi");
    const [to, setTo] = useState("Bengaluru");
    const [departure, setDeparture] = useState("2024-10-20");
    const [returnDate, setReturnDate] = useState("2024-10-21");
    const [travellers, setTravellers] = useState("1 Traveller");

    const handleSearch = () => {
        // Navigate to FlightCard page with flight search details
        navigate("/flight-card", {
            state: {
                origin: from,
                destination: to,
                departDate: departure,
                adults,
            },
        });
    };
    

    const handleOptionClick = (option) => {
        setSelectedOption(option.label);
        if (option.route) {
            navigate(option.route);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const TRAVEL_CLASSES = [
        "Economy/Premium Economy",
        "Business",
        "First Class"
    ];

    const FARE_TYPES = [
        { label: "Regular", isActive: false },
        { label: "Student", isActive: false },
        { label: "Senior Citizen", isActive: false },
        { label: "Armed Forces", isActive: false },
        { label: "Doctor and Nurses", isActive: false }
    ];

    const [showTravellersClass, setShowTravellersClass] = useState(false);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [travelClass, setTravelClass] = useState("Economy/Premium Economy");
    const [selectedFareType, setSelectedFareType] = useState(FARE_TYPES[0].label);

    const handleTravellersClassClick = () => {
        setShowTravellersClass(!showTravellersClass);
    };

    const handleApply = () => {
        setTravellers(`${adults + children + infants} Traveller${adults + children + infants > 1 ? 's' : ''}`);
        setShowTravellersClass(false);
    };

    return (
        <div className="container">
            <div className="options-navbar">
                {OPTIONS.map((option) => (
                    <div
                        key={option.label}
                        className={`option ${selectedOption === option.label ? "active" : ""}`}
                        onClick={() => handleOptionClick(option)}
                    >
                        <img src={option.icon} alt={option.label} className="icon" />
                        <p>{option.label}</p>
                    </div>
                ))}
            </div>
            <div className="search-box">
                {selectedOption === "Flights" && (
                    <>
                        <div className="trip-type">
                            {TRIP_TYPES.map((type) => (
                                <label key={type}>
                                    <input
                                        type="radio"
                                        name="tripType"
                                        value={type}
                                        checked={selectedTripType === type}
                                        onChange={(e) => setSelectedTripType(e.target.value)}
                                    />
                                    {type}
                                </label>
                            ))}
                        </div>
                        <div className="flight-search">
                            <div className="search-row">
                                <div className="search-field">
                                    <label htmlFor="from">From</label>
                                    <select id="from" value={from} onChange={(e) => setFrom(e.target.value)}>
                                        {CITIES.map((city) => (
                                            <option key={city.code} value={city.name}>
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="airport-code">
                                        {CITIES.find(city => city.name === from)?.code}, {CITIES.find(city => city.name === from)?.fullName}
                                    </span>
                                </div>
                                <div className="search-field">
                                    <label htmlFor="to">To</label>
                                    <select id="to" value={to} onChange={(e) => setTo(e.target.value)}>
                                        {CITIES.map((city) => (
                                            <option key={city.code} value={city.name}>
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="airport-code">
                                        {CITIES.find(city => city.name === to)?.code}, {CITIES.find(city => city.name === to)?.fullName}
                                    </span>
                                </div>
                                <div className="search-field">
                                    <label htmlFor="departure">Departure</label>
                                    <input type="date" id="departure" value={departure} onChange={(e) => setDeparture(e.target.value)} />
                                    <span className="day">{formatDate(departure)}</span>
                                </div>
                                <div className="search-field">
                                    <label htmlFor="return">Return</label>
                                    <input type="date" id="return" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} disabled={selectedTripType !== "Round Trip"} />
                                    <span className="day">{selectedTripType === "Round Trip" ? formatDate(returnDate) : "N/A"}</span>
                                </div>
                                <div className="search-field travellers-class-dropdown">
                                    <label onClick={handleTravellersClassClick}>Travellers & Class</label>
                                    <input type="text" value={`${travellers} - ${travelClass}`} readOnly onClick={handleTravellersClassClick} />
                                    {showTravellersClass && (
                                        <div className="dropdown-content">
                                            {/* Travellers Selection */}
                                            {/* Adults */}
                                            <div className="traveller-type">
                                                <h3>ADULTS (12y +)</h3>
                                                <p>on the day of travel</p>
                                                <div className="number-selector">
                                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, ">9"].map((num) => (
                                                        <button key={num} className={adults === num ? "active" : ""} onClick={() => setAdults(num)}>
                                                            {num}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Children */}
                                            <div className="traveller-type">
                                                <h3>CHILDREN (2y - 12y)</h3>
                                                <p>on the day of travel</p>
                                                <div className="number-selector">
                                                    {[0, 1, 2, 3, 4, 5].map((num) => (
                                                        <button key={num} className={children === num ? "active" : ""} onClick={() => setChildren(num)}>
                                                            {num}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Infants */}
                                            <div className="traveller-type">
                                                <h3>INFANTS (below 2y)</h3>
                                                <p>on the day of travel</p>
                                                <div className="number-selector">
                                                    {[0, 1, 2].map((num) => (
                                                        <button key={num} className={infants === num ? "active" : ""} onClick={() => setInfants(num)}>
                                                            {num}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Travel Class Selection */}
                                            <div className="travel-class">
                                                <h3>CHOOSE TRAVEL CLASS</h3>
                                                <div className="class-selector">
                                                    {TRAVEL_CLASSES.map((cls) => (
                                                        <button key={cls} className={travelClass === cls ? "active" : ""} onClick={() => setTravelClass(cls)}>
                                                            {cls}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Apply Button */}
                                            <button className="apply-button" onClick={handleApply}>APPLY</button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Fare Types Section */}
                            <div className="fare-types">
                                <p>Select a special fare</p>
                                <div className="fare-options">
                                    {/* Map over fare types and handle selection */}
                                    {FARE_TYPES.map((fare) => (
                                        <button 
                                            key={fare.label} 
                                            className={`fare-option ${selectedFareType === fare.label ? 'active' : ''}`} 
                                            onClick={() => setSelectedFareType(fare.label)}
                                        >
                                            {fare.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div> {/* End of flight search */}
                        <button className="search-button" onClick={handleSearch}>SEARCH</button>
                    </>
                )}
                {/* Additional content for other selected options can be added here */}
            </div> {/* End of search box */}
        </div> // End of container
    );
};

export default HomePage;