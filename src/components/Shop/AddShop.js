import React, { useState } from 'react';
import axios from 'axios';
import './Addshop.css';

function Addshop() {
  // State variables for form fields
  const [shopName, setShopName] = useState('');
  const [shopType, setShopType] = useState('');
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [packageType, setPackageType] = useState('');
  
  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const shopData = {
      shopName,
      shopType,
      admin: {
        name: adminName,
        email: adminEmail,
      },
      packageType,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/shops', shopData);
      console.log('Shop registered successfully:', response.data);
      // Clear form or redirect as needed
    } catch (error) {
      console.error('Error registering shop:', error);
    }
  };

  return (
    <div className="addshop-container">
      <h2>Register New Shop</h2>
      <form onSubmit={handleSubmit} className="addshop-form">
        
        {/* Shop Name */}
        <label>Shop Name</label>
        <input
          type="text"
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
          required
        />

        {/* Shop Type */}
        <label>Shop Type</label>
        <select value={shopType} onChange={(e) => setShopType(e.target.value)} required>
          <option value="">Select Shop Type</option>
          <option value="medical">Medical</option>
          <option value="general">General</option>
          <option value="bakery">Clothes</option>
          <option value="footwear">Footwear</option>
          <option value="footwear">Electrical</option>

          {/* Add more shop types as needed */}
        </select>

        {/* Admin Name */}
        <label>Admin Name</label>
        <input
          type="text"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
          required
        />

        {/* Admin Email */}
        <label>Admin Email</label>
        <input
          type="email"
          value={adminEmail}
          onChange={(e) => setAdminEmail(e.target.value)}
          required
        />

        {/* Package Type */}
        <label>Package Type</label>
        <select value={packageType} onChange={(e) => setPackageType(e.target.value)} required>
          <option value="">Select Package</option>
          <option value="basic">Basic</option>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select>

        {/* Submit Button */}
        <button type="submit">Register Shop</button>
      </form>
    </div>
  );
}

export default Addshop;
