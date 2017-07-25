/**
 * Created by aryan on 2017-05-28.
 */

function Protein(a_cost, n_cost, func, name, xpos, ypos){
    this.a_cost = a_cost;
    this.n_cost = n_cost;
    this.func = func;
    this.produce = function(){
        var prevAcidAmount = aminoAcids.showQuantity();
        var prevNucleoAmount = nucleotides.showQuantity();
        var prevAtpAmount = atp.showQuantity();
        
        aminoAcids.spend(this.a_cost*5);
        nucleotides.spend(this.n_cost*5);
        atp.spend(50);
        
        var nucleoAmount = nucleotides.showQuantity();
        var acidAmount = aminoAcids.showQuantity();
        var atpAmount = atp.showQuantity();
        
        if (nucleoAmount == prevNucleoAmount || acidAmount == prevAcidAmount || atpAmount == prevAtpAmount){
            nucleotides.collect(prevNucleoAmount-nucleoAmount);
            aminoAcids.collect(prevAcidAmount-acidAmount);
            atp.collect(prevAtpAmount-atpAmount);
        } else {
            atp.spend(50);
            for(var i=0; i<5; i++){
                this.func(); //this.func stores a function, this line of code calls it
            }
        }
    };
    this.getxpos = function(){
       return xpos 
    };
    this.getypos = function(){
        return ypos
    };
    this.getName = function(){
        return name
    };
}