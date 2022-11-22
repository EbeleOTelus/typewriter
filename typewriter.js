const typewriter = function(sentence, time){

// for (const char of sentence) {
  // console.log(char);
  for (let i = 0; i < sentence.length; i++ ){
  setTimeout(() => {process.stdout.write(sentence[i])  },time += 50);
  }
}
// }

typewriter("hello there\n", 0 )