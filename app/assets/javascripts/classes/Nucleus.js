/**
 * Created by aryan on 2017-06-17.
 */

function Nucleus(img, x, y, proteins){
    Organellee.call(this,'Nucleus', img, x, y);
    this.proteins = proteins;
    for(var i=0; i<this.proteins.length; i++){
        var protein = this.proteins[i];
        this.buttons.push(new Button(protein, 'produce',width-140,height-70,130,60,'Create Dicer Enzymes',15,255,5,20))
    }
}
