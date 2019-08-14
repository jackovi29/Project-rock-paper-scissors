    
    alert('Hello friend, are you ready to play against me? come on, I bet you can not win, but I will give you a chance; we are going to play 5 rounds, who win a round win a point, at the end who got more points win the game, ok lets play!')

    alert('oh!, one more thing, you will have to decide beetwen three options, rock!, paper! or scissors!, I\'ll do the same, and we will match the result to define the winner, have in mind that paper beats rock, scissors beats paper and rock beats scissors, well that\'s it, lets play!')
 
      function computerPlay(a, b, c) {
        let rndslc = Math.floor((Math.random() * 3) + 1);
          if (rndslc  == 3 ) { 
            return(a) }
              else if (rndslc == 2 ) {
                return(b) }
                  else {
                    return(c)}
       }
    computerPlay('rock','paper','scissors');  

    function playerSelection() { 
    let playerPlay = prompt('Please, chosse one beetwen: rock, paper or scissors, and type it.').toLowerCase();  
    return playerPlay; } 
      
      function playRound(playerSelection, computerSelection) {
        let outcome = playerSelection + computerSelection;
          switch (outcome) {
            case 'rockpaper':
            case 'paperscissors':
            case 'scissorsrock': 
              return ["Sorry you Lose! there\s no any point for you =(   ", -1];
              break;
            case 'paperrock':
            case 'scissorspaper':
            case 'rockscissors': 
              return ["alright honey you win, you get a point   ", 1];
              break;
            case 'rockrock': 
            case 'paperpaper': 
            case 'scissorscissors': 
              return ["Well the result it\'s tied, there\'s no winner in this round, so there\'s no any point for none of us =(   ",0];
              break;
            default:
              return('This is not supose to happend, please be sure you typed the correct option, with the right spelling, don\'t get distracted honey!');
         }
        return (outcome);
       }
       
      function game(){
        let points = 0, finalTot = 5;
        for(let g = 0; g < 5; g++) {
          let [finalMessg, finalScr] = playRound(playerSelection(),computerPlay('rock','paper','scissors'))
          alert(finalMessg);
          if (finalScr == 0) finalTot -=1;
          points += finalScr;
         }
          if (points > 0) 
             alert ("Ok, honey, I admit it, I was wrong you beat me, you\'r the winner, enjoy it");
           else if (points < 0 )
             alert ("I was right, you can\'t beat me, Im the boss right? refresh the page and prove me wrong")
           else alert ("well this was mostly tied, this is lame, please refresh my sweet home, I mean the page jeje, and lets try it again and see who wins = D   ");
        
           alert('And the outcome of scores was: your points: ' + (finalTot+points)/2+'  --  my points: '+(finalTot-points)/2);
       }  

      game();  
      alert('well if you want to play again with me, just refresh the page honey, see you!')
    // right now I don't have the time, but I'll be back to add more things and details and make it look better =)