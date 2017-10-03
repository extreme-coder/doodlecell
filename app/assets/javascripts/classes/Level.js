function Level(name,tasks,prevLevel){
    this.tasks = tasks;
    this.tasksLength = this.tasks.length;
    this.name = name;
    this.prevLevel = prevLevel;
    for(var i=0;i<this.tasksLength*2;i++){
        noTask = new NoTask();
        this.tasks.push(noTask);
    }
    this.getTasks = function(){
        return this.tasks;
    };
    this.display = function(){
        fill(0,255,255);
        stroke(0,255,255);
        textSize(36);
        text(name,width/2-20,36)
    }
}