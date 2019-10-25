

function Resource(name, num, r, g, b, startValue, minValue){
    this.name = name;
    this.num = num + 10;
    this.quantity = startValue;
    this.capacity = 500;
    this.minValue = minValue;
    this.runningLow = false;
    this.r = r;
    this.g = g;
    this.b = b;
    
    this.showQuantity = function(){
        return this.quantity
    };
    
    this.hasQuantityGoneLow = function(){
        if (this.quantity < this.minValue) {
            if(!this.runningLow) {
                this.runningLow = true;
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }

    };

    this.hasQuantityRecovered = function(){
        if (this.quantity >= this.minValue) {
            if(this.runningLow) {
                this.runningLow = false;
                return true;
            } else {
                return false;
            }
        } else {

            return false;
        }

    };
    
    this.afterRunningLow = function () {
       
    };
    
    this.ticker = function () {
        
    };
    
    

    this.display = function(){

        stroke(0);
        fill(r,g,b);
        
        rect(this.num,10,100,50);
        fill(0);
        textSize(12);
        text(this.quantity+'/'+this.capacity,this.num+5,55);
        text(this.name,this.num+5,20,50,50);

        if (this.hasQuantityGoneLow()) {
            notifier.addMessage(this.name + ' is running low');
            this.afterRunningLow();
        }
        if (this.hasQuantityRecovered()) {
            notifier.addMessage(this.name + ' has recovered');
        }
        
    };

    this.collect = function(amount){
        if (this.quantity+amount<this.capacity){
            this.quantity += amount;
        } else {
            notifier.addMessage('Not enough capacity for ' + this.name );
            this.quantity = this.capacity;
        }
    };
    
    this.spend = function(amount){
        if(this.quantity-amount>=0){
            this.quantity -= amount;
        } else {
            notifier.addMessage('Not enough '+ this.name);
        }
    }
}
