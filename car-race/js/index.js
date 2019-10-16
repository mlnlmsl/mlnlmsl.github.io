var start = document.getElementById("start");
function startGame() {
    start.style.display = 'none';
    var game = new Game();
    game.init();
    window.addEventListener("keydown", event => {
        event.preventDefault();
        switch (event.keyCode) {
            case 32: //key code of space
                // game.move();
                break;
            case 37: //key code left
                game.moveCarLeft();
                break;
            case 39: // key code right
                game.moveCarRight();
                break;
            default:
                break;
        }
    });
}
