import React, { useState } from 'react';

function BillingAddress() {
  const [billingAddress, setBillingAddress] = useState({
    street: '',
    apt: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress({ ...billingAddress, [name]: value });
  };

  return (
    <div className="p-5"> {/* Padding equivalent to 20px */}
      <h2 className="text-xl font-semibold mb-4" style={{ color: '#8B174E' }}>Billing Address</h2> {/* Margin bottom equivalent to 10px */}
      <div className="mb-2"> {/* Margin bottom for the street address */}
        <input 
          type="text" 
          placeholder="Street Address" 
          name="street" 
          value={billingAddress.street} 
          onChange={handleInputChange} 
          className="w-full p-2 border border-gray-300 rounded text-lg" // Full width, padding, border, border radius, font size
        />
      </div>
      <div className="mb-2"> {/* Margin bottom for the suite number */}
        <input 
          type="text" 
          placeholder="Apt or Suite Number" 
          name="apt" 
          value={billingAddress.apt} 
          onChange={handleInputChange} 
          className="w-full p-2 border border-gray-300 rounded text-lg" // Consistent input styling
        />
      </div>
      <div className="mb-2"> {/* Margin bottom for the city input */}
        <input 
          type="text" 
          placeholder="City" 
          name="city" 
          value={billingAddress.city} 
          onChange={handleInputChange} 
          className="w-full p-2 border border-gray-300 rounded text-lg"
        />
      </div>
      <div className="flex gap-2 mb-2"> {/* Flex layout for state and ZIP code */}
        <input 
          type="text" 
          placeholder="State" 
          name="state" 
          value={billingAddress.state} 
          onChange={handleInputChange} 
          className="flex-1 p-2 border border-gray-300 rounded text-lg" // Full width for half inputs
        />
        <input 
          type="text" 
          placeholder="ZIP Code" 
          name="zip" 
          value={billingAddress.zip} 
          onChange={handleInputChange} 
          className="flex-1 p-2 border border-gray-300 rounded text-lg"
        />
      </div>
      <div className="mb-2"> {/* Margin bottom for the country input */}
        <input 
          type="text" 
          placeholder="Country / Region" 
          name="country" 
          value={billingAddress.country} 
          onChange={handleInputChange} 
          className="w-full p-2 border border-gray-300 rounded text-lg"
        />
      </div>
    </div>
  );
}

export default BillingAddress;
