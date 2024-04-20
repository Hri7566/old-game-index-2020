function Bird() {
    this.y = height/2;
    this.x = 50;

    this.gravity = 0.6;
    this.lift = -15;
    this.vel = 0;

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }

    this.up = function() {
        this.vel += this.lift;
    }

    this.update = function() {
        this.vel += this.gravity;
        this.y += this.vel;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
        if (this.vel < -10) {
            this.vel = -10;
        }
        if (this.vel > 9.8) {
            this.vel = 9.8
        }
    }
}