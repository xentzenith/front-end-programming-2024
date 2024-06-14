import React, { useState } from 'react';
import PetList from './PetList';
import './App.css';

function App() {
  const [pets, setPets] = useState([
    { name: 'Buddy', age: 2, breed: 'Golden Retriever', description: 'Friendly and energetic' },
    { name: 'Mittens', age: 3, breed: 'Siamese Cat', description: 'Calm and affectionate' },
    { name: 'Daisy', age: 1, breed: 'Beagle', description: 'Loyal and curious' },
    { name: 'Patches', age: 4, breed: 'Calico Cat', description: 'Independent and playful' },
    { name: 'Bella', age: 5, breed: 'Labrador Retriever', description: 'Outgoing and high-spirited' }
  ]);

  return (
    <div className="App">
      <h1>Pet Adoption Portal</h1>
      <PetList pets={pets} />
    </div>
  );
}

export default App;
