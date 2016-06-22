var GAME_WIDTH = 1000;
var GAME_HEIGHT = 600;
var Missiles = new Array();
var Tanks = new Array();
var Explosions = new Array();

window.onload = function(){
    var canvas = document.getElementById('canvas');
    var pen = canvas.getContext('2d');

    var isDebug = false;

    var myTank = new Tank(100, 100, 'up', false);

    Tanks.push(myTank);

    for(var i = 0; i < 4; i++){
        Tanks.push(new Tank(200+i*80, 200, 'up', true));
    }


    function reDraw(){
        pen.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

        for(var i = 0; i < Missiles.length; i++){
            Missiles[i].draw(pen);
        }
        for(var i = 0; i < Tanks.length; i++){
            Tanks[i].draw(pen);
        }
        for(var i = 0; i < Explosions.length; i++){
            Explosions[i].draw(pen);
        }

        if(isDebug){
            pen.fillStyle = 'black';
            pen.font = 'bold 12px Courier New';
            pen.fillText('TankWar(DEBUG) -- by. Cano', 5, 16);
            pen.fillText('Count Missiles: ' + Missiles.length, 5, 32);
            pen.fillText('Count Tanks: ' + Tanks.length, 5, 48);
        }
    };
    function loop(){
        reDraw();

        for(var i = 0; i < Tanks.length; i++){
            for(var j = 0; j < Missiles.length; j++){
                var tankIsAttacked = Missiles[j].attackedTank(Tanks[i]);
                if(tankIsAttacked){
                    Tanks[i].isDead = true;
                    Tanks.splice(i, 1);
                    Missiles.isDead = true;
                    Missiles.splice(j);
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
