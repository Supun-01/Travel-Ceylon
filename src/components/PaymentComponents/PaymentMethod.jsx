import React, { useState } from 'react';
import visaIcon from '../../assets/BankCards/visa.jpeg';
import GpayIcon from '../../assets/BankCards/g pay.png';
import PaypalIcon from '../../assets/BankCards/paypal.jpeg';

function PaymentMethod() {
  const [cardDetails, setCardDetails] = useState({ number: '', expiration: '', cvv: '' });
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Credit or Debit Card');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  // Function to handle redirection based on selected payment method
  const handleRedirect = () => {
    if (selectedPaymentMethod === 'Google Pay') {
      window.location.href = 'https://pay.google.com'; // Redirect to Google Pay
    } else if (selectedPaymentMethod === 'PayPal') {
      window.location.href = 'https://www.paypal.com'; // Redirect to PayPal
    }
  };

  return (
    <div className="p-5">
      {/* Wrapper div for heading and icons aligned to right */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold" style={{ color: '#8B174E' }}>Payment Method</h2>

        {/* Icons aligned to the right */}
        <div className="flex gap-2">
          <img src={visaIcon} alt="Visa" className="w-8 h-8" />
          <img src={GpayIcon} alt="G Pay" className="w-8 h-8" />
          <img src={PaypalIcon} alt="PayPal" className="w-8 h-8" />
        </div>
      </div>

      <select 
        value={selectedPaymentMethod} 
        onChange={handlePaymentMethodChange}
        className="w-full p-2 border border-gray-300 rounded text-lg mb-2"
      >
        <option>Credit or Debit Card</option>
        <option>Google Pay</option>
        <option>PayPal</option>
        <option>Bank Transfer</option>
      </select>

      {selectedPaymentMethod === 'Credit or Debit Card' && (
        <>
          <input 
            type="text" 
            placeholder="Card Number" 
            name="number" 
            value={cardDetails.number} 
            onChange={handleInputChange} 
            className="w-full p-2 border border-gray-300 rounded text-lg mb-2"
          />
          <div className="flex gap-2 mb-2">
            <input 
              type="text" 
              placeholder="Expiration" 
              name="expiration" 
              value={cardDetails.expiration} 
              onChange={handleInputChange} 
              className="flex-1 p-2 border border-gray-300 rounded text-lg"
            />
            <input 
              type="text" 
              placeholder="CVV" 
              name="cvv" 
              value={cardDetails.cvv} 
              onChange={handleInputChange} 
              className="flex-1 p-2 border border-gray-300 rounded text-lg"
            />
          </div>
        </>
      )}

      {selectedPaymentMethod === 'Bank Transfer' && (
        <input 
          type="text" 
          placeholder="Bank Account Number" 
          name="bankAccount" 
          className="w-full p-2 border border-gray-300 rounded text-lg mb-2"
        />
      )}

      {(selectedPaymentMethod === 'Google Pay' || selectedPaymentMethod === 'PayPal') && (
        <div className="mt-2">
          <p className="text-gray-500 text-sm mb-2">
            You will be redirected to {selectedPaymentMethod} to complete the payment.
          </p>
          <button 
            onClick={handleRedirect}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Proceed to {selectedPaymentMethod}
          </button>
        </div>
      )}
    </div>
  );
}

export default PaymentMethod;
