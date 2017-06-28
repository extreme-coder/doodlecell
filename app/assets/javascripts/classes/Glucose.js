/**
 * Created by aryan on 2017-05-29.
 */

function Glucose(){
    this.quantity = 0;

    this.capacity = 500;

    this.display = function(){
        text(this.quantity,0,0);
    };

    this.collect = function(amount){
        this.quantity += amount;
    };
}
