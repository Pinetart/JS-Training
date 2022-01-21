const scores = [0, 10, 20, 30, 40, 50, 60, 70];

for (let i = 0; i < scores.length; i++) {
    if(scores[i] == 40){
    continue;
    }
  console.log(`Your score is ${scores[i]}`);

  if(scores[i] == 50){
    console.log('Score is 30');
    break;
  }
}
