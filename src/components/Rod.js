import React from 'react';
import Disk from './Disk';
import './Rod.css';

const Rod = ({ rods, rodIndex }) => {
  return (
    <div className="rod">
      {rods[rodIndex].map((disk, index) => (
        <Disk
          key={`${rodIndex}-${index}`}
          diskNumber={disk}
          rodName={`rod-${rodIndex + 1}`}
        />
      ))}
    </div>
  );
};

export default Rod;