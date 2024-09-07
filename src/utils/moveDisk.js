const moveDisk = (rods, fromRod, toRod, disk) => {
    const fromRodIndex = fromRod - 1;
    const toRodIndex = toRod - 1;
  
    if (rods[fromRodIndex].length === 0) {
      throw new Error("Cannot move disk from an empty rod");
    }
  
    const diskToMove = rods[fromRodIndex].pop();
    if (diskToMove !== disk) {
      throw new Error("Cannot move a disk that is not on top of the rod");
    }
  
    rods[toRodIndex].push(diskToMove);
  
    return rods;
  };
  
  export default moveDisk;