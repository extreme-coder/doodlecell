/**
 * Created by aryan on 2017-06-13.
 */

function InvaderVirae(){
    Task.call(this);
    this.amount = 1;
    this.counter = 0;
    this.start = function() {
        notifier.addMessage("Alert! Incoming virus attack!");
    };

    this.multiply = function(){
        this.amount *= 2;
    };
    this.display = function(){
        stroke(0);
        fill(255,0,255);
        rect(width-110,10,100,50);
        fill(0);
        textSize(12);
        text(this.amount+'/'+1000,width-100,50);
        text('Influenza',width-100,20,50,50);

    };
    this.destroy = function(amount){
        this.amount -= amount
    };
    this.play = function() {
        this.counter ++;
        if(this.counter > 300) {
            this.multiply();
            this.counter = 0;
        }
        this.display();
        this.isPlaying = true
    };

    this.isComplete = function() {
        if (this.amount <= 0) {
            this.amount = 1;
            aminoAcids.collect(10);
            nucleotides.collect(10);
            notifier.addMessage("You have defeated the virus wave!");
            return true;
        } else {
            return false;
        }
    };
    
    this.hasFailed = function(){
        if (this.amount >= 1000) {
            //this.amount = 1;
            return true;
        } else {
            return false;
        }
    }
}
