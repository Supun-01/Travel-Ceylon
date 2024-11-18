import React from 'react';
import '../../styles/Location.css';

function MeetingLocation() {
    return (
        <div className="meeting-location">
            <h2>Where will we meet</h2>
            <p>We will meet at this location, and from there, the experience will start.</p>

            <div className="map-container">
                <iframe
                    title="Sri Lanka Map"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7930512.630545805!2d78.1021194588832!3d7.873054174243362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b4591d454a7%3A0x3b8ed1ad69c5fc63!2sSri%20Lanka!5e0!3m2!1sen!2sus!4v1668540543058!5m2!1sen!2sus"
                ></iframe>
            </div>
        </div>
    );
}

export default MeetingLocation;
