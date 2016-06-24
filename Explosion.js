function Explosion(x, y){
    this.SIZE = 20;
    this.x = x;
    this.y = y;
    this.isDead = false;
    this.steps = new Array();
    this.step = 0;

    for(var i = 0; i < 8; i++){
        this.steps[i] = this.SIZE/8*i;
    }

    this.draw = function(p){
        if(this.isDead){
            return;
        }

        p.fillStyle = 'red';
        p.beginPath();
        p.arc(this.x, this.y, this.steps[this.step], 0, 2*Math.PI);
        p.fill();

        if(this.step == this.steps.length){
            this.isDead = true;
        }

        this.step++;
    };
};
