import React, { useState } from 'react';

const ClientInformationForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    clientID: '',
    ownerName: '',
    ownerEmail: '',
    rollNo: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Security Note: Always handle sensitive information securely.
    console.log('Form submitted:', formData);

    // Send formData to your backend or perform other actions
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="clientID">Client ID:</label>
        <input
          type="text"
          id="clientID"
          name="clientID"
          value={formData.clientID}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="ownerName">Owner Name:</label>
        <input
          type="text"
          id="ownerName"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="ownerEmail">Owner Email:</label>
        <input
          type="email"
          id="ownerEmail"
          name="ownerEmail"
          value={formData.ownerEmail}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="rollNo">Roll No.:</label>
        <input
          type="text"
          id="rollNo"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ClientInformationForm;
