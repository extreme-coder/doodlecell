/**
 * Created by aryan on 2017-08-28.
 */

function Tutorial(){

    this.closeButton = new Button(this, 'hide', width/2-30, height/2+15 +40, 60 , 40, '  OK  ',90, 180, 90, 16);
    this.introTwoShowing = false;
    this.introThreeShowing = false;
    this.hasBurnedGlucose=false;
    this.glucoseBurn = new Popup("Cells need energy, in the form of ATP, to survive. They get ATP by burning a sugar called Glucose. Click the mitochondrion to open its menu, and press the button which says 'Burn Glucose' You will lose some glucose, but gets lots of ATP, which is incredibly useful.",520,160, this.closeButton, null, 370, 280, arrow_img);
    this.hasCreatedDicerEnzymes=false;
    this.dicerEnzyme = new Popup("Oh no,viruses are attacking! If they multiply, they'll destroy the cell! You have to create DICER enzymes to fight the viruses! Click on the nucleus to open its menu, and press the button which says 'Create Dicer Enzymes'",240,190, this.closeButton);
    this.hasCollectedResources=false;
    this.resourceCollection = new Popup("Cells can recycle resources through lysosomes created by the Golgi Body. Click on it to open its menu and press the buttons to earn resources like Glucose, which is burned for energy.",670,150, this.closeButton, null, 280, 250, arrow_img);
    this.hasRegulatedGenes=false;
    this.geneRegulator = new Popup("Oh no, the cell's been hit by radiation! The cell's DNA has been damaged, and the cell will die soon! The only way to save the cell is to create a gene regulator protein. Click on the nucleus to open its menu, and press the button which says 'Create Gene Regulators'",240,190,this.closeButton);
    this.hasBeenIntroduced=false;

    this.closeButton2 = new Button(this, 'hide', width/2-30 + 70, height/2+15 +40, 60 , 40, '  SKIP  ',90, 180, 90, 16);
    this.nextButton = new Button(this, 'getIntroduction2', width/2-30-70 , height/2+15 +40, 60 , 40, '  NEXT  ',90, 180, 90, 16);
    this.introduction = new Popup("Welcome to Doodle Cell! In this game, you help a single-celled amoeba survive against the hard conditions of the microscopic world. Just like humans have organs, cells have organelles, which help them survive, and which you will be using in the game. You can find out an organelle's name by hovering over it.",240,190, this.closeButton2, this.nextButton, 500,220);

    this.nextButton2 = new Button(this, 'getIntroduction3', width/2-30-70 , height/2+15 +40, 60 , 40, '  NEXT  ',90, 180, 90, 16);
    this.closeButton3 = new Button(this, 'hide', width/2-30 + 70, height/2+15 +40, 60 , 40, '  SKIP  ',90, 180, 90, 16);
    this.introduction2 = new Popup("Here you can keep track of your resources. ATP is used for energy, glucose is burned to make ATP, and amino acids and and nucleotides are used in the creation of proteins. Make sure you have enough of these resources at all times.",500,10, this.closeButton3, this.nextButton2, 375, 225, arrow_img);

    this.introduction3 = new Popup("This is the notifications bar. It will tell you what's going on in the game. When you hear a 'ding' sound, check this bar to see what happened.",240,190,this.closeButton, null, 300, 200, arrow_img);

    this.showingPopup = null;

    this.hide = function () {
        this.showingPopup.hide();
    };

    this.getGlucoseBurn = function(){
        if (this.hasBurnedGlucose==false){
            this.glucoseBurn.show();
            this.showingPopup = this.glucoseBurn;
            this.hasBurnedGlucose = true
        }                
    };
    this.getDicerEnzyme = function(){
        if (this.hasCreatedDicerEnzymes==false){
            this.dicerEnzyme.show();
            this.showingPopup = this.dicerEnzyme;
            this.hasCreatedDicerEnzymes = true
        }
    };
    this.getResourceCollection = function(){
        if (this.hasCollectedResources==false){
            this.resourceCollection.show();
            this.showingPopup = this.resourceCollection;
            this.hasCollectedResources = true
        }
    };
    this.getGeneRegulator = function(){
        if (this.hasRegulatedGenes==false){
            this.geneRegulator.show();
            this.showingPopup = this.geneRegulator;
            this.hasRegulatedGenes = true
        }
    };
    this.getIntroduction = function(){
        if (this.hasBeenIntroduced==false){
            this.introduction.show();
            this.showingPopup = this.introduction;
            this.hasBeenIntroduced = true
        }
    };
    this.getIntroduction2 = function(){
        this.introTwoShowing = true;
        this.introduction.hide();
        this.introduction2.show();
        this.showingPopup = this.introduction2;

    };
    this.getIntroduction3 = function(){
        this.introTwoShowing = false;
        this.introThreeShowing = true;
        this.introduction2.hide();
        this.introduction3.show();
        this.showingPopup = this.introduction3;

    };
    this.display = function() {
        if (this.showingPopup!=null){
            this.showingPopup.draw();

        }
    };
    this.mousePressed = function(x,y) {
        if (this.showingPopup!=null){
            this.showingPopup.mousePressed(x,y);
        }
    };
}
