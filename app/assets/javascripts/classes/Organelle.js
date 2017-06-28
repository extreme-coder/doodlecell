/**
 * Created by aryan on 2017-05-28.
 */

function Organellee(name, img, x, y){
    this.name = name;
    this.img = img;
    this.width = img.width;
    this.height = img.height;
    this.x = x;
    this.y = y;
    this.origX = x;
    this.origY = y;

    this.isMenuOpen = false;
    this.buttons = [];
    this.counter = 0;
    this.isMouseHovering = false;


    this.menuOpen = function() {
        return this.isMenuOpen;
    };

    this.closeMenu = function() {
        this.isMenuOpen = false;
    };

    this.isInside = function(x, y) {
        x2 = this.x + this.width;
        y2 = this.y + this.height;
        if (x  >this.x && x<x2 && y > this.y && y < y2) {
            return true;
        }

    };

    this.mousePressed = function() {
        if(this.isInside(mouseX, mouseY)) {
            this.isMenuOpen = true;
        }
        if (this.menuOpen()) {
            for (var i = 0; i < this.buttons.length; i++) {
                this.buttons[i].mousePressed(mouseX, mouseY);
            }
        }
    };

    this.mouseMoved = function() {
        this.isMouseHovering = this.isInside(mouseX,mouseY)
    };

    this.display = function(){
        this.counter ++;
        if (this.counter%4==0) {
            var newx = this.x + Math.floor((Math.random()*3-1));
            if (newx > this.origX - 50 && newx < this.origX + 50) {
                this.x = newx;
            }
            var newy = this.y + Math.floor((Math.random()*3-1));
            if (newy > this.origY - 40 && newy < this.origY + 40) {
                this.y = newy;
            }
        }

        image(this.img, this.x, this.y, this.width, this.height);
        if (this.menuOpen()){
            fill(255);
            stroke(0);
            rect(0,height-height/5+35,width,80);
            for (var i=0;i<this.buttons.length;i++) {
                this.buttons[i].display()
            }
        }
        if(this.isMouseHovering) {
            stroke(0);
            fill(0);
            textSize(20);
            text(this.name,this.x,this.y);
        }
    };
}
