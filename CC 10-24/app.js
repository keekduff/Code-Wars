// P1
// Write a function that will check if two given characters are the same case.
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

function twoChar(char1, char2) {
    if (char1.toUpperCase() === char1.toLowerCase() || char2.toLowerCase() === char2.toUpperCase()) {
      return -1
    } else if (char1 === char1.toLowerCase() && char2 === char2.toLowerCase() || char1 === char1.toUpperCase() && char2 === char2.toUpperCase()) {
      return 1
    }else {
      return 0
    }
  }
  console.log(twoChar("A", "?"))

//P2
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = (month) => {
    if (month <= 3) {
      return 1
    }else if (month <= 6) {
      return 2
    }else if (month <= 9) {
      return 3
    }else {
      return 4
    }
  }

// P3
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array: okay

function wolvesEatSheep(arr) {
    let sheepNum = arr.length - arr.indexOf("wolf") -1
    if (sheepNum === 0) {
      return "Please go away!"
    }else {
      return `Oi! Sheep number ${sheepNum}! You are about to be eaten by a wolf!`
    }
  }
  console.log(wolvesEatSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "sheep","wolf"]))

// P4 Tomorrow's code
function 