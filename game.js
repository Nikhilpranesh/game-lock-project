var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 10;
var boxCount = 0;
var unlockImages = [
    'mrimage-removebg-preview.png',
    'sitimage-removebg-preview.png',
    'drum_image-removebg-preview.png',
    'bnimage-removebg-preview.png',
    'gus2image-removebg-preview.png',
    'fullpic.jpg'
];

document.getElementById('btn').addEventListener('click', function () {
    var guess = parseInt(document.getElementById('guessInput').value);

    if (attempts > 0) {
        if (guess === randomNumber) {
            boxCount++;
            document.querySelector('img').src = unlockImages[boxCount - 1];
            display("Congratulations! You guessed the number in " + (11 - attempts) + " attempts.");

            randomNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 10;

            setTimeout(() => {
                document.querySelector('img').src = 'lockimages-removebg-preview.png';
                display('Guess the number to open Box ' + (boxCount + 1) + '.');
                document.getElementById('guessInput').value = '';
            }, 5000);

            if (boxCount === 6) {
                display("Congratulations! You won the game!");
                setTimeout(() => {
                    display("Thank You for playing!");
                    setTimeout(() => {
                        resetGame();
                    }, 3000);
                }, 5000);
            }
        } else if (guess < randomNumber) {
            display('Number is too low. Try a higher number.');
        } else {
            display('Number is too high. Try a lower number.');
        }

        attempts -= 1; 
        displayRemainingAttempts();
    }

    if (attempts <= 0 && guess !== randomNumber) {
        display('Game Over! Try again.');
    }
});

function display(msg) {
    document.getElementById('msg').textContent = msg;
}

function displayRemainingAttempts() {
    var attemptsMessage = "Remaining attempts: " + attempts;
    var currentMessage = document.getElementById('msg').textContent;
    document.getElementById('msg').textContent = currentMessage + " " + attemptsMessage;
}

function resetGame() {
    boxCount = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 10;
    document.querySelector('img').src = 'lockimages-removebg-preview.png';
    document.getElementById('btn').disabled = false;
    document.getElementById('guessInput').disabled = false;
    display("Guess the number to open Box 1.");
    document.getElementById('guessInput').value = '';
}
