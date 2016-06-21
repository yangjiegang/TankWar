function Tank(x, y, direction){
    this.SIZE = 10;
    this.SPEED = 8;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.isRunning = false;
    this.isAttacked = false;

    this.attack = function(){
        if(this.isAttacked){
            return;
        }
        if(this.direction == 'left' || this.direction == 'right'){
            var mx = this.x + (this.SIZE*5 - 2)/2;
            var my = this.y + (this.SIZE*4 - 2)/2;
        }else if(this.direction == 'up' || this.direction == 'down'){
            var mx = this.x + (this.SIZE*4 - 2)/2;
            var my = this.y + (this.SIZE*5 - 2)/2;
        }
        console.log(mx);
        var m = new Missile(mx, my, this.direction);
        Missiles.push(m);
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
    };

    this.changeDirection = function(direction){
        switch(direction){
            case 'up':
                switch(this.direction){
                    case 'left':
                        this.x += this.SIZE;
                        this.y -= this.SIZE;
                        break;
                    case 'down':
                        this.y -= this.SIZE;
                        break;
                    case 'right':
                        this.y -= this.SIZE;
                        break;
                }
                this.direction = 'up';
                break;
            case 'right':
                switch(this.direction){
                    case 'left':
                        this.x += this.SIZE;
                        break;
                    case 'up':
                        this.y += this.SIZE;
                        break;
                }
                this.direction = 'right';
                break;
            case 'down':
                switch(this.direction){
                    case 'left':
                        this.x += this.SIZE;
                        break;
                    case 'up':
                        this.y += this.SIZE;
                        break;
                }
                this.direction = 'down';
                break;
            case 'left':
                switch(this.direction){
                    case 'up':
                        this.x -= this.SIZE;
                        this.y += this.SIZE;
                        break;
                    case 'right':
                        this.x -= this.SIZE;
                        break;
                    case 'down':
                        this.x -= this.SIZE;
                        break;
                }
                this.direction = 'left';
                break;
        }
    };

    this.keyDownEvent = function(key){
        switch(key){
            case 'w':
                this.changeDirection('up');
                this.isRunning = true;
                break;
            case 'a':
                this.changeDirection('left');
                this.isRunning = true;
                break;
            case 's':
                this.changeDirection('down');
                this.isRunning = true;
                break;
            case 'd':
                this.changeDirection('right');
                this.isRunning = true;
                break;
            case 'j':
                this.attack();
                this.isAttacked = true;
        }
    };

    this.keyUpEvent = function(key){
        if(this.direction == 'up' && key == 'w'){
            this.isRunning = false;
        }
        if(this.direction == 'left' && key == 'a'){
            this.isRunning = false;
        }
        if(this.direction == 'down' && key == 's'){
            this.isRunning = false;
        }
        if(this.direction == 'right' && key == 'd'){
            this.isRunning = false;
        }
        if(key == 'j'){
            this.isAttacked = false;
        }
    }

    this.draw = function(p){
        if(this.isRunning){
            this.run();
        }
        p.fillStyle = 'blue';
        var color = p.fillStyle;
        if(this.isAttacked){
            color = 'black';
        }
        switch(this.direction){
            case 'up':
                p.fillRect(this.x, this.y+this.SIZE, this.SIZE/10*9, 4*this.SIZE);
                p.fillRect(this.x+this.SIZE/10*31, this.y+this.SIZE, this.SIZE/10*9, 4*this.SIZE);
                p.fillRect(this.x+this.SIZE, this.y+2*this.SIZE, 2*this.SIZE, 2*this.SIZE);
                p.fillStyle = color;
                p.fillRect(this.x+this.SIZE/4*7, this.y, this.SIZE/2, this.SIZE*5/2);
                break;
            case 'right':
                p.fillRect(this.x, this.y, this.SIZE*4, this.SIZE/10*9);
                p.fillRect(this.x, this.y+this.SIZE/10*31, this.SIZE*4, this.SIZE/10*9);
                p.fillRect(this.x+this.SIZE, this.y+this.SIZE, this.SIZE*2, this.SIZE*2);
                p.fillStyle = color;
                p.fillRect(this.x+this.SIZE/2*5, this.y+this.SIZE/4*7, this.SIZE/2*5, this.SIZE/2);
                break;
            case 'down':
                p.fillRect(this.x, this.y, this.SIZE/10*9, 4*this.SIZE);
                p.fillRect(this.x+this.SIZE/10*31, this.y, this.SIZE/10*9, 4*this.SIZE);
                p.fillRect(this.x+this.SIZE, this.y+this.SIZE, 2*this.SIZE, 2*this.SIZE);
                p.fillStyle = color;
                p.fillRect(this.x+this.SIZE/4*7, this.y+this.SIZE/2*5, this.SIZE/2, this.SIZE*5/2);
                break;
            case 'left':
                p.fillRect(this.x+this.SIZE, this.y, this.SIZE*4, this.SIZE/10*9);
                p.fillRect(this.x+this.SIZE, this.y+this.SIZE/10*31, this.SIZE*4, this.SIZE/10*9);
                p.fillRect(this.x+this.SIZE*2, this.y+this.SIZE, this.SIZE*2, this.SIZE*2);
                p.fillStyle = color;
                p.fillRect(this.x, this.y+this.SIZE/4*7, this.SIZE/2*5, this.SIZE/2);
                break;
        }
    };
}
