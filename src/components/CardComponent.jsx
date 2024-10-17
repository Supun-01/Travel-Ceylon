import React from 'react';
import Button from "./subComponents/Button"; // Correct path

const CardComponent = ({ image, title, hours, kindOfTour, price }) => {
  return (
    <div className="card border rounded-lg overflow-hidden shadow-lg h-150 flex flex-col p-4 bg-white">
      {/* Enforce the same width and height for all images */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover mb-2 rounded-lg" // Uniform image size
      />
      <div className="card-body p-4 flex-grow bg-white">
        {/* Title and Explore button aligned in a row */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-pink-500">{title}</h2>
          {/* Use custom Button component for the Explore button */}
          <Button
            ButtonText="Explore"
            ButtonHeight="2"  // Set height as needed
            ButtonWidth="4"   // Set width as needed
          />
        </div>

        {/* Hours, kindOfTour, and Price aligned in a row */}
        <div className="flex justify-between mt-2">
          <p className="text-gray-600">{hours} | {kindOfTour}</p>
          <p className="text-lg">
            Price &nbsp;&nbsp;&nbsp;&nbsp; {price} {/* Adds tab space between Price and value */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
