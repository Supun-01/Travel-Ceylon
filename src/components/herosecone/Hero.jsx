import React from "react";
import Searchbar from "../Searchbar";
import img1 from "./imgs/01.jpg";
import img2 from "./imgs/02.jpg";
import img3 from "./imgs/03.jpg";

function Hero() {
  return (
    <>
      <div className="flex gap-4 mx-20 flex-col md:flex-row min-h-screen">
        {/* First Section with Sub-sections in a Column */}
        <div className="flex-1 p-4 flex flex-col gap-2 md:w-full lg:w-1/2">
          <div className="p-2 text-4xl font-semibold">
            Welcome to TravelCeylon!
          </div>
          <br /><br />
          <div className="p-2 text-xl leading-loose font-medium line-clamp-7 text-[#4A4A4A]">
            Discover Sri Lanka like never before with our expert travel guides.
            Whether you're exploring the stunning beaches, ancient cities, or
            lush tea plantations, we connect you with the best local guides who
            will bring your journey to life. Enjoy personalized, insider
            experiences and make unforgettable memories with ease. Let us be
            your trusted partner in creating the perfect Sri Lankan adventure!
          </div>
          <br />
          {/* Container for Searchbar positioned at the bottom and aligned to the right */}
          <div className="flex justify-end mt-auto">
            <div className="flex-1 max-w-md">
              {/* Optional: limit the width of the Searchbar */}
              <Searchbar />
            </div>
          </div>
        </div>

        {/* Second Section with Two Main Sub-sections in a Row */}
        <div className="flex-1 p-4 flex gap-2 md:w-full lg:w-1/2">
          {/* Main Sub Section 1 */}
          <div className="flex bg-green-300 p-2 rounded-md w-full md:w-1/3 relative overflow-hidden h-screen">
            {/* Image fits parent div */}
            <img
              src={img1}
              alt="Image 1"
              className="object-cover w-full h-full relative overflow-hidden scale-110"
            />
          </div>

          {/* Main Sub Section 2 with Vertical Layout */}
          <div className="flex p-0 flex-col gap-2 w-full md:w-2/3">
            {/* Sub-section 1 in Main Sub Section 2 */}
            <div className="flex-1 bg-white p-2 rounded-md relative overflow-hidden ">
              <img
                src={img2}
                alt="Image 2"
                className="object-cover w-full h-full relative overflow-hidden scale-110"
              />
            </div>
            {/* Sub-section 2 in Main Sub Section 2 */}
            <div className="flex-1 bg-white p-2 rounded-md relative overflow-hidden ">
              <img
                src={img3}
                alt="Image 3"
                className="object-cover w-full h-full relative overflow-hidden scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
