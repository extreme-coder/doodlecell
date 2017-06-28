/**
 * Created by aryan on 2017-06-13.
 */

function TaskManager(tasks){
    this.tasks = tasks;
    this.currentTask = null;
    this.timeAlive = 0;
    this.play = function(){
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
                stroke(0);
                fill(128);
                rect(0,0,width,height);
                stroke(255,255,0);
                fill(255,0,0);
                textSize(150);
                text('GAME OVER',0,0,width,height);
                textSize(75);
                text(Math.round(this.timeAlive/60)+' seconds alive',0,300)
            } else {
                this.currentTask.play();
                this.timeAlive++
            }
        }
    };
}
