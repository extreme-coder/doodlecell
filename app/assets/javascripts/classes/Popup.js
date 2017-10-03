

function Popup(popupText, x, y, button1, button2, pwidth, pheight, arrow_img) {
    this.visible = false;
    if (pwidth==null){
        pwidth = width-480;
    }
    if (pheight == null) {
        pheight = height-380;
    }
    this.closeButton = button1;
    this.button2 = button2;




    this.draw = function() {
        if (this.visible) {
            fill(70);
            stroke(0);
            rect(x,y,pwidth,pheight);
            fill(255);
            textSize(18);
            text(popupText,x+15,y+15,pwidth-30,pheight-30);
            this.closeButton.x = x + pwidth/2- this.closeButton.width/2 ;
            this.closeButton.y = y + pheight - 50;

            if ( this.button2 != null) {
                this.closeButton.x = x +pwidth/2- this.closeButton.width/2 +50;
                this.button2.x = x +pwidth/2- this.closeButton.width/2 - 50;
                this.button2.y = y + pheight - 50;
            }
            
            this.closeButton.display();
            if ( this.button2 != null ) {
                this.button2.display();
            }
            if (arrow_img != null) {
                image(arrow_img,x-90,y);
            }

        }
    };
    this.mousePressed = function(x,y){
        if (this.visible){
            this.closeButton.mousePressed(x,y);
            if ( this.button2 != null ) {
                this.button2.mousePressed(x,y);
            }
        }
    };
    this.show = function() {
        this.visible = true;
        taskManager.pause()
    };

    this.hide = function() {
        this.visible = false;
        taskManager.unPause()
    };
}