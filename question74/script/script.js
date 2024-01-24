function countCharacterFrequency() {
  var inputBox = document.getElementById('inputBox').value;
  const myArray = inputBox.split(" ");
  let joinedArray = myArray.join('');
  let obj = {};


  for (let i = 0; i < joinedArray.length; i++) {
    if (obj[joinedArray[i]] == undefined) {
      obj[joinedArray[i]] = 1;
    } else {
      obj[joinedArray[i]] += 1;
    }
  }


  let maxValue = 0;
  let maxChars = [];

  for (let char in obj) {
    if (obj[char] > maxValue) {
      maxValue = obj[char];
      maxChars = [char];
    } else if (obj[char] === maxValue) {
      maxChars.push(char);
    }
  }


  let myString = JSON.stringify(obj);
  document.getElementById('resultContainer').innerHTML = "Character Frequencies: " + myString;


  document.getElementById('resultContainer').innerHTML += "<br>Maximum Occurring Character(s): " + maxChars.join(', ');
}
