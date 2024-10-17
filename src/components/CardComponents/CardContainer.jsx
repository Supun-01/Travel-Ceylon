import React from 'react';
import image1 from "../../assets/01.jpg";  // Correcting the relative path

import image2 from "../../assets/02.jpg";
import image3 from "../../assets/03.jpg";
import image4 from "../../assets/04.jpg";
import CardComponent from './CardComponent';

const CardContainer = () => {
  const cardDataRow1 = [
    {
      image: image1,
      title: 'Down South',
      hours: '3 Hours',
      kindOfTour: 'Kind of Tour',
      price: '100$',
    },
    {
      image: image2,
      title: 'Sigiriya',
      hours: '3 Hours',
      kindOfTour: 'Kind of Tour',
      price: '100$',
    },
  ];

  const cardDataRow2 = [
    {
      image: image3,
      title: 'Ella',
      hours: '3 Hours',
      kindOfTour: 'Kind of Tour',
      price: '100$',
    },
    {
      image: image4,
      title: 'Trincomalee',
      hours: '3 Hours',
      kindOfTour: 'Kind of Tour',
      price: '100$',
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-center text-2xl font-bold text-pink-500 mb-6">
        Where you want to visit?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Render first row */}
        {cardDataRow1.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">
        {/* Render second row */}
        {cardDataRow2.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="border border-pink-400 text-pink-400 px-4 py-2 rounded-lg hover:bg-pink-400 hover:text-white">
          Load More
        </button>
      </div>
    </div>
  );
};

export default CardContainer;
