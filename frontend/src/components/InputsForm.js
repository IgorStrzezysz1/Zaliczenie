import React, { useState } from 'react';
import '../Styles/ImputForm.css'

const InputForm = ({ addUser, updateUser, initialData }) => {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.id) {
      updateUser(formData);
    } else {
      addUser(formData);
    }
    setFormData({ id: '', name: '', surname: '', phoneNumber: '', city: '', pesel: '', email: '' });
  };

  return (
    <form className = "FormContainer" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <br/>
      <label>
        Surname:
        <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} />
      </label>
      <br/>
      <label>
        Phone number:
        <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
      </label>
      <br/>
      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
      </label>
      <br/>
      <label>
        PESEL:
        <input type="number" name="pesel" value={formData.pesel} onChange={handleInputChange} />
      </label>
      <br/>
      <label>
        E-mail:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;