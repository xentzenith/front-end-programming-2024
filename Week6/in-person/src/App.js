import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: ''
  });

  const [errors, setErrors] = useState({
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'age') {
      if (value < 30 || value > 100) {
        setErrors({
          ...errors,
          age: 'Age must be between 30 and 100'
        });
      } else {
        setErrors({
          ...errors,
          age: ''
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.age) {
      alert(`Name: ${formData.name}, Age: ${formData.age}, Email: ${formData.email}`);
    }
  };

  return (
    <div>
      <div>
        <h2>Form Data</h2>
        <p>Name: {formData.name}</p>
        <p>Age: {formData.age}</p>
        <p>Email: {formData.email}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            min={30}
            max={100}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
