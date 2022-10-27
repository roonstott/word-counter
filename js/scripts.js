let testString = "one two three four five two three four five three four five four five five";


function countWords(stringSentence) {
  let arrayOfWords = stringSentence.split(" ");
  let pushArray = [];

  arrayOfWords.forEach(function(wordReference) {
    let counter = 0
    if (hasItBeenChecked(wordReference, pushArray) !== true) {
      arrayOfWords.forEach(function(wordCrossReference) {
        if (wordReference === wordCrossReference) {
          counter +=1;
        };
      });
      pushArray.push(wordReference);
      pushArray.push(counter);
    };
  });
  return pushArray;
};

//function to check if the specific word has already been counted, because it came up earlier in the array
//use a for loop instead of a forEach loop--so that you can break out of the loop AS SOON AS a true value is found. 

function hasItBeenChecked(wordReference, pushArray){
  for (i=0; i<pushArray.length; i++) {
    if (pushArray[i] && pushArray[i] === wordReference) {
      return true;
    }
  };
};

console.log(countWords(testString));