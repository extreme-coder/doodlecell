/**
 * Created by aryan on 2017-06-13.
 */

function Task(){
    this.isPlaying = false;
    this.start = function() {

    };
    this.play = function(){
        this.isPlaying = true
    };

    this.playing = function(){
        return this.isPlaying
    };
    
    this.isComplete = function(){
                
    };
    
    this.hasFailed = function(){
         
    }
}