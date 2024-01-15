import React, { useState } from 'react';
import styles from "./AddressForm.module.css"

const AddressForm = () => {
  const [formData, setFormData] = useState({
    country: '',
    fullName: '',
    mobileNumber: '',
    pinCode: '',
    houseNumber: '',
    area: '',
    landmark: '',
    city: '',
    state: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <form className={styles.userAddressForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="country">Country</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
        >
          <option value="">Select Country</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          {/* Add more countries as needed */}
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="mobileNumber">Mobile Number</label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="pinCode">Pin Code</label>
        <input
          type="text"
          id="pinCode"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="houseNumber">House Number</label>
        <input
          type="text"
          id="houseNumber"
          name="houseNumber"
          value={formData.houseNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="area">Area</label>
        <input
          type="text"
          id="area"
          name="area"
          value={formData.area}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="landmark">Landmark</label>
        <input
          type="text"
          id="landmark"
          name="landmark"
          value={formData.landmark}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Use This Address</button>
    </form>
  );
};

export default AddressForm;