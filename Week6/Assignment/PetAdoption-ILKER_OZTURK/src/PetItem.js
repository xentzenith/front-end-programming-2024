import React from 'react';

function PetItem({ pet }) {
  return (
    <div className="pet-item">
      <h2>{pet.name}</h2>
      <p>Age: {pet.age}</p>
      <p>Breed: {pet.breed}</p>
      <p>Description: {pet.description}</p>
    </div>
  );
}

export default PetItem;
