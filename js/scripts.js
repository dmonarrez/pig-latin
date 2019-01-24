
var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

function beginVowel(word) {
  return word + 'way'
}

function beginCons(word) {
  for(var i = 0; i < word.length;) {
    if((word[i] === 'u' || word[i] === 'U') && (word[i - 1] === 'q' || word[i - 1] === 'Q')) {
      i++;
    }
    if(!vowels.includes(word[i])) {
      i++;
    } else {
      let cons = word.slice(0, i);
      let sliceWord = word.slice(i, word.length);
      let transformed = sliceWord + cons + 'ay';
      return transformed
    }
  }
}

function beginQu(word) {
  let qu = word.slice(0, 2);
  let sliceWord = word.slice(2, word.length);
  let transformed = sliceWord + qu + 'ay';
  return transformed
}

function pigLatin(sentence){
  let wordsArr = sentence.split(' ');
  let transformed = '';

  for(var i = 0; i < wordsArr.length; i++){
    // debugger;
    let word = wordsArr[i];
    if(vowels.includes(word[0])){
      transformed += beginVowel(word) + ' ';
    } else if((word[0] === 'q' || word[0] === 'Q') && (word[1] === 'u' || word[1] === 'U')) {
      transformed += beginQu(word) + ' ';
    } else {
      transformed += beginCons(word) + ' ';
    }
  }
  return transformed
}

$(document).ready(function (){
  $("#pig-latin").submit(function (event){
    event.preventDefault();
    //input sentence
    let sentence = $("#sentence").val();

    $("#result").text(pigLatin(sentence));
  });
});
