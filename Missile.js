function Missile(x, y, direction, isEnemy){
    this.SIZE = 3;
    this.SPEED = 20;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.isEnemy = isEnemy;
    this.isDead = false;

    this.attackedTank = function(tank){
        var isAttacked = false
        if(this.isEnemy != tank.isEnemy){
            if(tank.direction == 'left' || tank.direction == 'right'){
                if(tank.x + tank.SIZE*5 > this.x && tank.x < this.x + this.SIZE*2 && tank.y + tank.SIZE*4 > this.y && tank.y < this.y + this.SIZE*2){
                    isAttacked = true;
                }
            }
            if(tank.direction == 'up' || tank.direction == 'down'){
                if(tank.x + tank.SIZE*4 > this.x && tank.x < this.x + this.SIZE*2 && tank.y +tank.SIZE*5 > this.y && tank.y < this.y + this.SIZE*2){
                    isAttacked = true;
                }
            }
        }
        if(isAttacked){
            Explosions.push(new Explosion(this.x, this.y));
        }
        return isAttacked;
    };

    this.run = function(){
        switch(this.direction){
            case 'left':
                this.x -= this.SPEED;
                break;
            case 'up':
                this.y -= this.SPEED;
                break;
            case 'right':
                this.x += this.SPEED;
                break;
            case 'down':
                this.y += this.SPEED;
                break;
        }
        if(this.x > GAME_WIDTH || this.y > GAME_HEIGHT || this.x < 0-this.SIZE*2 || this.y < 0-this.SIZE*2){
            Missiles.splice(Missiles.indexOf(this));
        }
    };

    this.draw = function(p){
        this.run();
        p.fillStyle = 'black';
        p.beginPath();
        p.arc(this.x, this.y, this.SIZE, 0, 2*Math.PI);
        p.fill();
    };
};
