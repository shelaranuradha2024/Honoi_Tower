import React, { useState } from 'react';
import GameBoard from '../components/GameBoard';
import moveDisk from '../utils/moveDisk';
import './App.css';

const App = () => {
  const [rods, setRods] = useState([
    [8, 7, 6],
    [],
    []
   
      ]);
    
      const handleMoveDisk = (fromRod, toRod, disk) => {
        setRods(moveDisk(rods, fromRod, toRod, disk));
      };
    
      return (
        <div className="app">
          <GameBoard rods={rods} onMoveDisk={handleMoveDisk} />
        </div>
      );
    };
    
    export default App;