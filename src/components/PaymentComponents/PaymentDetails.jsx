import React from 'react';

function PaymentDetails() {
  return (
    <div className="p-5 rounded "> {/* Padding, rounded corners, and white background */}
      <h2 className="text-xl font-semibold mb-4" style={{ color: '#8B174E' }}>Payment Details</h2> {/* Custom color for the heading */}
      <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"> {/* Select styling */}
        <option>Payment List</option>
        {/* Add other options as needed */}
      </select>
      <p className="mt-4" style={{ color: '#D12B79' }}>
        Discount: <span className="font-bold" >5%</span> {/* Using the custom Tailwind color */}
      </p>
    </div>
  );
}

export default PaymentDetails;
