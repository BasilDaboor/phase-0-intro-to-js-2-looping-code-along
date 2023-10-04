// Code your solutions in this file


function writeCards(array, eventName) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      newArr[i] = `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`;
    }
    return newArr;
  }

  
function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }