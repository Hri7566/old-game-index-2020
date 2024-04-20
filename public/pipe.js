function Pipe() {
    this.top = random(height / 2);
    this.bottom = 128;
    this.bottomheight = height - (this.top + this.bottom)
    this.x = width;
    this.w = 50;
    this.speed = 2;
    this.highlight = false;

    this.show = function() {
        fill(255);
        if (this.highlight) {
            fill(255, 0, 0);
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, this.top + this.bottom, this.w, height);
    }

    this.update = function() {
        this.x -= this.speed;
    }

    this.offscreen = function() {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }

    this.hits = function(bird) {
        if (bird.y < this.top || bird.y > this.bottomheight) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.highlight = true;
                return true;
            }
        }
        return false;
    }
}