import React from 'react';
import Button from "../subComponents/Button"; 

const CardComponent = ({ image, title, hours, kindOfTour, price }) => {
  return (
    <div className="card border rounded-lg overflow-hidden shadow-lg h-150 flex flex-col p-2 bg-white"> 
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover mb-2 rounded-lg" 
      />
      {/* Card body */}
      <div className="card-body p-4 flex-grow bg-white rounded-lg">
        
        {/* Title and Explore button */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-pink-500">{title}</h2>
          <Button
            ButtonText="Explore"
            ButtonHeight="2"
            ButtonWidth="4"
          />
        </div>

        {/* Hours and kindOfTour */}
        <div className="flex justify-between items-center text-gray-600 mb-2">
          <p>{hours} | {kindOfTour}</p>
          
          {/* Price */}
          <span className="text-lg">
            Price:
            <span className="text-lg font-normal ml-4"> 
              {price}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
