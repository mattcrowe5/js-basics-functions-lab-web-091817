// Code your solution in this file!
function distanceFromHqInBlocks(street){
  return Math.abs(street-42)
}

function distanceFromHqInFeet (street) {
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet (starting, ending) {
  return Math.abs(starting-ending) * 264
}

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * distance;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
