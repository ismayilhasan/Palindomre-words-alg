const words = ["level", "radar", "text", "river", "madam", "sales","ana"];

let wordsCount = 0;

for (const word of words) {
  let reverseWord = "";
  for (let i = 0; i < word.length; i++) {
    console.log();
    reverseWord+=word[word.length - i - 1]
      
    
  }
 if(word == reverseWord)
  {
    wordsCount+=1
  }

}

console.log(wordsCount);

