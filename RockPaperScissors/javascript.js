const game = () => {
    //initial score variables
    let pScore = 0;
    let cScore = 0;

    //begins the game by fading the intro out and the game in
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        
        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //establishes varaibles that link to elements in the html for displaying the game
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = ''
                
            })
        })





        //computer selections
        const computerOptions = ['rock', 'paper', 'scissors'];

        //loops through the array above and selects the computers option randomly
        options.forEach(option=>{
            option.addEventListener("click", function() {

                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                //controls animation time
                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);

                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`;
                }, 2000);
                

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };


    //how the winner of each match is decided
    const compareHands = (playerChoice, computerChoice) => {
            const winner = document.querySelector('.winner');
            if(playerChoice === computerChoice) {
                winner.textContent = 'It is a tie';
                return;
            }

            if(playerChoice === 'rock'){
                if(computerChoice === 'scissors'){
                    winner.textContent = 'Player wins';
                    pScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = 'Computer Wins';
                    cScore++;
                    updateScore();
                    return;
                }
            }
            if(playerChoice === 'paper'){
                if(computerChoice === 'rock'){
                    winner.textContent = 'Player wins';
                    pScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = 'Computer Wins';
                    cScore++;
                    updateScore();
                    return;
                }
            }
            if(playerChoice === 'scissors'){
                if(computerChoice === 'paper'){
                    winner.textContent = 'Player wins';
                    pScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = 'Computer Wins';
                    cScore++;
                    updateScore();
                    return;
                }
            }

        
        
    };
    startGame();
    playMatch();
};

game();