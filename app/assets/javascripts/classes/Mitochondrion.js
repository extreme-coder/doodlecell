/**
 * Created by aryan on 2017-06-09.
 */

function Mitochondrion(img_path, x, y){
    Organellee.call(this, 'Mitochondrion', img_path, x, y);

    this.burn = function() {
        var prevSugarAmount = glucose.showQuantity();
        glucose.spend(20);
        var sugarAmount = glucose.showQuantity();
        if (prevSugarAmount != sugarAmount) {
            atp.collect(100);
        }
    };
    this.buttons.push(new Button(this, 'burn', width/2,height-70,width/5,60,'Burn Glucose',0,255,0,30));
}