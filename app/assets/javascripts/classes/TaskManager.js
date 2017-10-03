/**
 * Created by aryan on 2017-06-13.
 */

function TaskManager(tasks){
    this.tasks = tasks;
    this.currentTask = null;
    this.timeAlive = 0;
    this.playing = true;
    this.counter = 0;
    this.isTaskFailed = function() {
        if (this.currentTask == null) return false;
        return this.currentTask.hasFailed();
    };
    this.isNotPaused = function() {
        return this.playing;
    };
    this.pause = function() {
        this.playing = false
    };
    this.unPause = function(){
        this.playing = true
    };
    this.play = function(){


        if (this.playing){
            this.counter++;
            if (this.counter<180){
                return
            }
            if (this.currentTask == null) {
                this.randnum = Math.floor((Math.random()*this.tasks.length));
                this.task = this.tasks[this.randnum];
                this.currentTask = this.task;
                this.currentTask.start();
                this.timeAlive++
            } else {
                if (this.currentTask.isComplete()) {
                    this.currentTask = null;
                    this.timeAlive++
                } else if (this.currentTask.hasFailed()){

                } else {
                    this.currentTask.play();
                    this.timeAlive++
                }
            }

        }
        if (this.currentTask != null) {
            this.currentTask.display();
        }
    }
}
