function Missile(x, y, direction){
    this.SIZE = 3;
    this.SPEED = 20;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.isDead = false;

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
