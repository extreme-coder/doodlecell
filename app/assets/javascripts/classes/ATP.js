/**
 * Created by aryan on 2017-08-31.
 */

function ATP(){
    Resource.call(this,'ATP',300,125,125,0,150,100);
    this.counter = 0;
    this.afterRunningLow = function () {
        tutorial.getGlucoseBurn();
    };

    this.ticker = function () {
        this.counter ++;
        if ( this.counter == 60 && this.quantity > 0) {
            this.quantity --;
            this.counter = 0;
        }
    };

}
