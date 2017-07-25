/**
 * Created by aryan on 2017-07-17.
 */
function Radiation(){
    Task.call(this);
    this.counter = 0;
    this.complete = false;
    this.start = function(){
        notifier.addMessage('You\'ve been hit by radiation! DNA was damaged!')
    };
    this.play = function(){
        this.isPlaying = true;
    };
    this.fix = function(){
        this.complete=true
    };
    this.isComplete = function(){
        return this.complete
    };
    this.hasFailed = function(){
        this.counter++;
        return (this.counter>=900)
    }
}
