/**
 * Created by aryan on 2017-06-16.
 */

function NoTask(){
    Task.call(this);
    this.counter = 0;
    this.play = function() {
        //No-op
    };
    this.display = function() {
        //No-op
    };

    this.isComplete = function() {
        this.counter ++;
        if (this.counter > 300) {
            this.counter = 0;
            return true;
        } else {
            return false;
        }

    };

     
    this.hasFailed = function() {
        return false;
    }
}