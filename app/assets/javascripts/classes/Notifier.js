/**
 * Created by aryan on 2017-06-06.
 */
function Notifier(){
    this.messages = [];

    this.addMessage = function(text){
        this.messages.unshift(text)
    };

    this.display = function() {
        fill(100,100,100);
        rect(5,80,240,300);
        text1 = '';
        for (i=0;i<this.messages.slice(0,5).length;i++) {
            text1 = text1 + this.messages[i] + '\n\n';
        }

        fill(255,255,255);
        textSize(16);
        text(text1,10,100,240);

    }
}
