/**
 * Created by aryan on 2017-06-18.
 */

function GolgiBody(img_path,x,y){
    Organellee.call(this, 'Golgi Body', img_path,x,y);
    this.sugarCounter = 0;
    this.acidCounter = 0;
    this.nucleoCounter = 0;
    this.fatCounter = 0;
    this.sugarReady = false;
    this.acidReady = false;
    this.nucleoReady = false;
    this.fatReady = false;
    this.ticker = function() {
        this.sugarCounter++;
        this.acidCounter++;
        this.nucleoCounter++;
        this.fatCounter++;
        if (this.sugarCounter > 600) {
            this.buttons[0].setAddText("Ready");
            if (!this.sugarReady) {
                this.sugarReady = true;
                notifier.addMessage("Glucose is ready to collect");
                tutorial.getResourceCollection();
            }

        } else {
            this.buttons[0].setAddText("Wait for " + (Math.floor(10-this.sugarCounter/60)+1) + 's');
            this.sugarReady = false;
        }



        if (this.acidCounter > 900) {
            this.buttons[1].setAddText("Ready");
            if (!this.acidReady) {
                this.acidReady = true;
                notifier.addMessage("Amino acids are ready to collect");
            }

        } else {
            this.buttons[1].setAddText("Wait for " + (Math.floor(15-this.acidCounter/60)+1) + 's');
            this.acidReady = false;
        }
        if (this.nucleoCounter > 900) {
            this.buttons[2].setAddText("Ready");
            if (!this.nucleoReady) {
                this.nucleoReady = true;
                notifier.addMessage("Nucleotides are ready to collect");
            }

        } else {
            this.buttons[2].setAddText("Wait for " + (Math.floor(15-this.nucleoCounter/60)+1) + 's');
            this.nucleoReady = false;
        }
    };

    this.display = function() {
        this.counter ++;
        if (this.counter%4==0) {
            var newx = this.x + Math.floor((Math.random()*3-1));
            if (newx > 100 && newx < 800) {
                this.x = newx;
            }
            var newy = this.y + Math.floor((Math.random()*3-1));
            if (newy > 100 && newy < 600) {
                this.y = newy;
            }
        }

        image(this.img, this.x, this.y);
        if (this.menuOpen()){
            fill(255);
            stroke(0);
            rect(0,height-height/5+35,width,80);
            for (var i=0;i<this.buttons.length;i++) {
                this.buttons[i].display()
            }
        }


        if(this.isMouseHovering) {
            stroke(0);
            fill(0);
            textSize(20);
            text(this.name,this.x,this.y);
        }
    };

    this.getGlucose = function(){
        if (this.sugarCounter >= 600) {
            this.sugarCounter = 0;
            glucose.collect(40);
        }
    };
    
    this.getAminoAcids = function(){
        if (this.acidCounter >= 900) {
            this.acidCounter = 0;
            aminoAcids.collect(60);
        }
    };
    
    this.getNucleotides = function(){
        if (this.nucleoCounter >= 900){
            this.nucleoCounter = 0;
            nucleotides.collect(60);
        }
    };

    this.buttons.push(new Button(this,'getGlucose',width-360,height-70,110,60,'Glucose',0,0,255,18));
    this.buttons.push(new Button(this,'getAminoAcids',width-240,height-70,110,60,'Amino-Acids',0,255,0,18));
    this.buttons.push(new Button(this,'getNucleotides',width-120,height-70,110,60,'Nucleotides',255,0,0,18));
}
