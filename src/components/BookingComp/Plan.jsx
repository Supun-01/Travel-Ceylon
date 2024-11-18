import React from 'react';
import '../styles/Plan.css'; // Assuming you have a CSS file for styles

const Plan = () => {
    return (
        <div className="plan-container">
            <h2 className="plan-title">This is the plan</h2>
            <p className="plan-description">
                Check out the plan below to see what you'll get up to with your local host.
                Feel free to personalize this offer with the host of your choice.
            </p>
            <div className="pickup-list">
                <PickupItem />
                <PickupItem />
                <PickupItem />
                <PickupItem />
                <PickupItem />
            </div>
        </div>
    );
};

const PickupItem = () => {
    return (
        <div className="pickup-item">
            <div className="pickup-icon">📍</div>
            <div className="pickup-content">
                <h3 className="pickup-title">Guest pick-up</h3>
                <p className="pickup-description">
                    You will be picked up anywhere in Unawatuna. Your local host will contact you
                    regarding the exact pickup point.
                </p>
            </div>
        </div>
    );
};

export default Plan;
