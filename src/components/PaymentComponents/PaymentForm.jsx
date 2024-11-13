import React from 'react';
import PaymentDetails from './PaymentDetails';
import PaymentSummary from './PaymentSummary';
import PaymentMethod from './PaymentMethod';
import BillingAddress from './BillingAddress';
import NavBar from '../NavBar'
import Footer from '../Footer';

function PaymentForm() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen"> {/* Center form and set background */}
        <div className="payment-form bg-white  my-20 py-5 rounded-lg shadow-lg max-w-lg w-full"> {/* Form container styling */}
          <br /><br />
          <PaymentDetails />
          <PaymentSummary />
          <PaymentMethod />
          <BillingAddress />

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-[#D12B79] text-white mr-5 py-1 px-4 pr-4 rounded hover:bg-[#B02060] focus:outline-none focus:ring-2 focus:ring-[#D12B79] focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PaymentForm;
