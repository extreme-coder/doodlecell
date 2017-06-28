/**
 * Created by aryan on 2017-06-08.
 */

function Button (actionObject, action, x, y, width, height, txt, r, g, b, txtSize) {
    this.actionObject = actionObject;
    this.action = action;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = txt;
    this.r = r;
    this.g = g;
    this.b = b;
    this.txtSize = txtSize;
    
    this.mousePressed = function(x, y) {
        var x2 = this.x + this.width;
        var y2 = this.y + this.height;
        if (x  >this.x && x<x2 && y > this.y && y < y2) {
           this.actionObject[this.action]();
        }
       
    };

    this.setAddText = function(addText) {
        this.addText = addText;
    }
    
    this.display = function() {
        stroke(0);
        fill(this.r,this.g,this.b);
        rect(this.x,this.y,this.width,this.height);
        fill(255);
        textSize(this.txtSize);
        text(this.text,this.x+5,this.y+10,this.width,this.height);
        if (this.addText != null) {
            textSize(this.txtSize-3);
            text(this.addText,this.x+5,this.y + 30,this.width,this.height);
        }
    }
}
