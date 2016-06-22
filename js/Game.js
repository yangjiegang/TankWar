var GAME_WIDTH = 1000;
var GAME_HEIGHT = 600;
var Missiles = new Array();
var Tanks = new Array();

window.onload = function(){
    var canvas = document.getElementById('canvas');
    var pen = canvas.getContext('2d');

    var isDebug = false;

    var myTank = new Tank(100, 100, 'up', false);

    var e = new Tank(600, 400, 'up', true);

    Tanks.push(myTank);
    Tanks.push(e);


    function reDraw(){
        pen.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        myTank.draw(pen);
        e.draw(pen);

        for(var i = 0; i < Missiles.length; i++){
            Missiles[i].draw(pen);
        }

        if(isDebug){
            pen.font = 'bold 12px Courier New';
            pen.fillText('TankWar(DEBUG) -- by. Cano', 5, 16);
            pen.fillText('Count Missiles: ' + Missiles.length, 5, 32);
        }
    };
    function loop(){
        reDraw();

        for(var i = 0; i < Tanks.length; i++){
            for(var j = 0; j < Missiles.length; j++){
                var tankIsAttacked = Missiles[j].attackedTank(Tanks[i]);
                if(tankIsAttacked){
                    Tanks[i].isDead = true;
                    Tanks.splice(i);
                }
            }
        }
    }

    setInterval(loop, 25);

    window.onkeydown = function(keyEvent){
        var key = keyEvent.key;
        switch(key){
            case '3':
                if(isDebug){
                    isDebug = false;
                }else{
                    isDebug = true;
                }
            default:
                myTank.keyDownEvent(key);
        }
    }

    window.onkeyup = function(keyEvent){
        myTank.keyUpEvent(keyEvent.key);
    }
};
