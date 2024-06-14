import React from 'react';
import PetItem from './PetItem';

function PetList({ pets }) {
  return (
    <div className="pet-list">
      {pets.map((pet, index) => (
        <PetItem key={index} pet={pet} />
      ))}
    </div>
  );
}

export default PetList;
