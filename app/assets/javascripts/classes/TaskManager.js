/**
 * Created by aryan on 2017-06-13.
 */

function TaskManager(tasks){
    this.tasks = tasks;
    this.currentTask = null;
    this.timeAlive = 0;
    this.isTaskFailed = function() {
        if (this.currentTask == null) return false;
        return this.currentTask.hasFailed();
    };
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

            } else {
                this.currentTask.play();
                this.timeAlive++
            }
        }
    };
}
