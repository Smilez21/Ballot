import React from 'react';


const NomineeCard = ({ nominee, selected, handleSelection }) => {
  return (
    <div
      className={`nominee-card ${selected ? 'selected' : ''}`}
      onClick={handleSelection}
    >
      <img src={nominee.image} alt={nominee.name} />
      <h4>{nominee.name}</h4>
    </div>
  );
};

export default NomineeCard;
