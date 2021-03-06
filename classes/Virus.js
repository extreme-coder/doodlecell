/**
 * Created by aryan on 2017-06-13.
 */

function InvaderVirae(){
    Task.call(this);
    this.amount = 1;
    this.counter = 0;
    this.virusPositions = [];
    this.start = function() {
        notifier.addMessage("Alert! Incoming virus attack!");
        if (virusSound.isLoaded()){
            virusSound.play();
        }
        this.virusPositions.push(createVector(Math.floor(Math.random()*(width-460))+300,Math.floor(Math.random()*(height-270))+110));

    };


    this.multiply = function(){
        this.amount *= 2;
        this.virusPositions = [];
        for(var i=0; i<this.amount; i++){
            this.virusPositions.push(createVector(Math.floor(Math.random()*(width-460))+300,Math.floor(Math.random()*(height-270))+110));
        }
    };
    this.display = function(){
        stroke(0);
        fill(255,0,255);
        rect(width-110,10,100,50);
        fill(0);
        textSize(12);
        text(this.amount+'/'+200,width-100,50);
        text('Virus',width-100,20,50,50);
        for(var i=0; i<this.virusPositions.length; i++){
            image(virusImg, this.virusPositions[i].x, this.virusPositions[i].y);
        }
    };
    this.destroy = function(amount){
        this.amount -= amount;
        if (this.amount < 0) {
            this.amount = 0;
        }
    };
    this.play = function() {
        this.counter ++;
        if(this.counter > 300) {
            this.multiply();
            this.counter = 0;
        }

        this.isPlaying = true;
        tutorial.getDicerEnzyme();
    };

    this.isComplete = function() {
        if (this.amount <= 0) {
            this.amount = 1;
            aminoAcids.collect(10);
            nucleotides.collect(10);
            notifier.addMessage("You have defeated the virus wave!");
            this.virusPositions = [];
            return true;
        } else {
            return false;
        }
    };
    
    this.hasFailed = function(){
        if (this.amount >= 200) {
            //this.amount = 1;
            return true;
        } else {
            return false;
        }
    }
}
