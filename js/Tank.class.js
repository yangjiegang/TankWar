function Tank(x, y){
    this.x = x;
    this.y = y;
    this.direction = 'left';

    this.keyEvent = function(key){
        this.x += 5;
    };

    this.draw = function(p, SIZE){
        p.fillStyle = 'blue';
        switch(this.direction){
            case 'up':
                p.fillRect(this.x, this.y+SIZE, SIZE/10*9, 4*SIZE);
                p.fillRect(this.x+SIZE/10*31, this.y+SIZE, SIZE/10*9, 4*SIZE);
                p.fillRect(this.x+SIZE, this.y+2*SIZE, 2*SIZE, 2*SIZE);
                p.fillRect(this.x+SIZE/4*7, this.y, SIZE/2, SIZE*5/2);
                break;
            case 'right':
                p.fillRect(this.x, this.y, SIZE*4, SIZE/10*9);
                p.fillRect(this.x, this.y+SIZE/10*31, SIZE*4, SIZE/10*9);
                p.fillRect(this.x+SIZE, this.y+SIZE, SIZE*2, SIZE*2);
                p.fillRect(this.x+SIZE/2*5, this.y+SIZE/4*7, SIZE/2*5, SIZE/2);
                break;
            case 'down':
                p.fillRect(this.x, this.y, SIZE/10*9, 4*SIZE);
                p.fillRect(this.x+SIZE/10*31, this.y, SIZE/10*9, 4*SIZE);
                p.fillRect(this.x+SIZE, this.y+SIZE, 2*SIZE, 2*SIZE);
                p.fillRect(this.x+SIZE/4*7, this.y+SIZE/2*5, SIZE/2, SIZE*5/2);
                break;
            case 'left':
                p.fillRect(this.x+SIZE, this.y, SIZE*4, SIZE/10*9);
                p.fillRect(this.x+SIZE, this.y+SIZE/10*31, SIZE*4, SIZE/10*9);
                p.fillRect(this.x+SIZE*2, this.y+SIZE, SIZE*2, SIZE*2);
                p.fillRect(this.x, this.y+SIZE/4*7, SIZE/2*5, SIZE/2);
                break;
        }
    };
}
