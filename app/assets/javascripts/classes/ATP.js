/**
 * Created by aryan on 2017-05-28.
 */

function ATP(){
    this.quantity = 0;
    
    this.capacity = 500;
    
    this.display = function(){
        text(this.quantity,0,0);
    };

    this.produce = function(glucose){
        this.quantity += (glucose/3);
    };
}