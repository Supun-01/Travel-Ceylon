import React from 'react';

function PaymentSummary() {
  return (
    <div className="p-5 rounded"> {/* Padding and rounded corners with a white background */}
      <h2 className="text-xl font-semibold mb-4" style={{ color: '#8B174E' }}>Payment Summary</h2> {/* Larger font size and margin bottom */}
      <div className="border border-gray-300 p-4 rounded bg-white"> {/* Border applied to the inner container */}
        
        {/* Subtotal Price */}
        <div className="flex justify-between mb-2"> {/* Flex container for alignment */}
          <p>Subtotal Price:</p>
          <span className="font-bold text-gray-700">$200.00</span>
        </div>

        {/* Discount */}
        <div className="flex justify-between mb-2">
          <p>Discount:</p>
          <span className="font-bold text-gray-700">$10.00</span>
        </div>

        {/* Total Price */}
        <div className="flex justify-between">
          <p>Total Price:</p>
          <span className="font-bold text-gray-700">$190.00</span>
        </div>

      </div>
    </div>
  );
}

export default PaymentSummary;
