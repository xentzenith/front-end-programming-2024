import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [usd, setUsd] = useState('');
  const [cad, setCad] = useState('');
  const [warning, setWarningMessage] = useState('');

  const cadRate = 1.27;

  const handleChange = (e) => {
    const value = e.target.value;
    if (value < 0) {
      setWarningMessage('Value cannot be negative');
    } else {
      setWarningMessage('');
      setUsd(value);
      setCad((value * cadRate).toFixed(2));
    }
  };

  return (
    <div className="container">
      <h1>USD to CAD Converter</h1>
      <form>
        <div className="form-group">
          <label htmlFor="usd">USD:</label>
          <input
            type="number"
            id="usd"
            value={usd}
            onChange={handleChange}
          />
        </div>
        {warning && <p className="warning">{warning}</p>}
        <div className="form-group">
          <label htmlFor="cad">CAD:</label>
          <input
            type="text"
            id="cad"
            value={cad}
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default App;
