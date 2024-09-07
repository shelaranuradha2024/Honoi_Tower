import React from 'react';
import './Disk.css';

const Disk = ({ diskNumber, rodName }) => {
  return (
    <div className={`disk disk-${diskNumber} disk-${rodName}`}></div>
  );
};

export default Disk;