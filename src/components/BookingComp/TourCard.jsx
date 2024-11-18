import React, { useState } from 'react';
import beachImage from '../../assets/beach.jpg'; // Make sure the path to your image is correct
import '../../styles/TourCard.css';

const TourCard = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [adults, setAdults] = useState(1);

    return (
        <div className="tour-card">
            {/* Left side: Image */}
            <div className="tour-image">
                <img src={beachImage} alt="Unawatuna Beach" />
            </div>

            {/* Right side: Booking form */}
            <div className="tour-booking">
                <h3 className="price">$50 per person</h3>
                <p className="reviews">⭐⭐⭐⭐⭐ 101 reviews</p>

                {/* Date Selector */}
                <input
                    type="date"
                    className="booking-input"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />

                {/* Time Selector */}
                <select
                    className="booking-select"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                >
                    <option value="">Select time</option>
                    <option value="8:00 AM">8:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                </select>

                {/* Adults Selector */}
                <select
                    className="booking-select"
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                </select>

                <button className="book-button">Select</button>
            </div>

            {/* Tour details span full width */}
            <div className="tour-details">
                <h2 className="tour-title">Tour to Unawatuna Beach</h2>
                <p className="tour-description">
                    Embark on a journey to the ancient city of Ayutthaya where many treasures, insights,
                    and stories are waiting. Let a local host show you around and experience this cultural
                    attraction from a local perspective. Give yourself the gift of a day trip with a local -
                    it's a must-do!
                </p>
            </div>
        </div>
    );
};

export default TourCard;
