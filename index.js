// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  const blockLocation =42;
  return Math.abs(block- blockLocation);  
}


function distanceFromHqInFeet(block) {
    const blockLocation =42;
    const blockToBlock = 264;

    const blocksDistance = Math.abs(block - blockLocation);
    const distanceInFeet = blocksDistance * blockToBlock;

    return distanceInFeet;
} 

function distanceTravelledInFeet(startingPoint, endingPoint) {
    const blockToBlock = 264; // Hypothetical value
  
    const blockLocation = Math.abs(endingPoint - startingPoint);
    const distanceInFeet = blockLocation * blockToBlock;
  
    return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
    const totalFeetTraveled = distanceTravelledInFeet(start, destination);

    if(totalFeetTraveled <= 400) {
        return 0;
    }else if(totalFeetTraveled > 400 && totalFeetTraveled <= 2000) {
        return 0.02 *(totalFeetTraveled - 400);
    }else if(totalFeetTraveled > 2000 && totalFeetTraveled < 2500) {
        return 25;
    }else if (totalFeetTraveled > 2500) {
        return 'cannot travel that far';
    }
}