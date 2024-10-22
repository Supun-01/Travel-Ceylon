import React from "react";

function Herosectwo() {
  return (
    <div>
      <div className="flex flex-col  h-screen">
        {/* tittle bar */}
        <div className=" mb-4 h-1/6 p-8 flex justify-center">
          <p className="text-4xl tracking-wider font-semibold">Why You Want To Select Us</p>
        </div>

        <div className="flex flex-row space-x-4 h-5/6">
          <div className="bg-cyan-500 w-2/12 rounded-lg">item 1</div>
          <div className="bg-cyan-500 w-4/12 rounded-lg" >item 2</div>
          <div className=" w-6/12 p-8 leading-loose text-2xl">
            At TravelCeylon, we go beyond just bookings. We provide personalized
            experiences, insider tips, and seamless support throughout your
            journey. Whether it’s exploring hidden gems or enjoying top-rated
            attractions, we ensure your Sri Lankan adventure is unforgettable.
            Let us handle the details, so you can enjoy the perfect getaway with
            ease and confidence.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosectwo;
