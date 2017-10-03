/**
 * Created by aryan on 2017-07-17.
 */
function Radiation(){
    Task.call(this);
    this.counter = 0;
    this.complete = false;
    this.start = function(){
        r = 0;
        g = 220;
        b = 0;
        notifier.addMessage('You\'ve been hit by radiation! DNA was damaged!');
        this.complete = false;
        tutorial.getGeneRegulator();
    };
    this.play = function(){
        this.isPlaying = true;

    };
    this.fix = function(){
        this.complete=true;
        r = 130;
        g = 130;
        b = 130;
    };
    this.isComplete = function(){
        return this.complete;
    };
    this.hasFailed = function(){
        this.counter++;
        return (this.counter>=2500);
    }
}
