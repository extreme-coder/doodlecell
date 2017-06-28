/**
 * Created by aryan on 2017-06-21.
 */

function Starvation(){
    Task.call(this);
    this.isPlaying = false;
    this.play = function(){
        this.isPlaying = true
    };
    this.playing = function(){
        return this.isPlaying
    }
}
