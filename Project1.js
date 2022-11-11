'use script'

// console.log(document.querySelector(".message"));
//
// console.log(document.querySelector(".message").textContent);
//
// document.querySelector(".message").textContent = "Correct Number";
//
// console.log(document.querySelector(".message").textContent);
//
// document.querySelector('.number').textContent = "14";
//
// document.querySelector('.score').textContent = "20";
//
// document.querySelector('.guess').value = 23;
//
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random()*20)+1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

//When there is no input

if(!guess) {
    document.querySelector('.message').textContent = 'No number';
    // console.log(document.querySelector('.message').textContent = 'No numbers')

//When the guess is correct

    }else if (guess === secretNumber) {
    document.querySelector('.message').textContent = "Correct number";
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }

//When the guess is wrong

    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = "You lost the g0ame";
        }
    }

//  When the guess is Too High
//
// }else if (guess > secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'Too High';
//             score--;
//             document.querySelector('.score').textContent = score;
//         }else {
//             score--;
//             document.querySelector('.score').textContent = score;
//             document.querySelector('.message').textContent = "You lost the game";
//         }
//
// // When the answer is Too Low
//
//     }else if ( guess < secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'Too Low';
//             score--;
//             document.querySelector('.score').textContent = score;
//         }else {
//             score--
//             document.querySelector('.score').textContent = score;
//             document.querySelector('.message').textContent = "You lost the game";
//         }
});

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random()*20)+1;
    score = "20";
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = " ";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = "15rem";


})






