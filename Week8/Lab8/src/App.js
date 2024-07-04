import React, { useState } from 'react';

const App = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <ChildA array={array} />
      <ChildB setArray={setArray} />
    </div>
  );
}

const ChildA = ({ array }) => {
  return (
    <div>
      {array.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

const ChildB = ({ setArray }) => {
  const handleClick = () => {
    setArray([6, 7, 8, 9, 10]);
  }

  return (
    <button onClick={handleClick}>Update Array</button>
  );
}

export default App;