window.onload = function(){
    var canvas = document.getElementById('canvas');
    var pen = canvas.getContext('2d');
    var GAME_WIDTH = 1000;
    var GAME_HEIGHT = 600;

    var myTank = new Tank(100, 100);

    var yourTank = new Tank(300, 300);

    
    function reDraw(){
        pen.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        myTank.draw(pen);
        yourTank.draw(pen);
    };

    setInterval(reDraw, 25);

    window.onkeydown = function(keyEvent){
        var key = keyEvent.key
        myTank.keyDownEvent(key);
    }

    window.onkeyup = function(keyEvent){
        var key = keyEvent.key
        myTank.keyUpEvent(key);
    }
};
