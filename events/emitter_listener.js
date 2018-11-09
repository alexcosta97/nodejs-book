var events = require('events');
function Account(){
    this.balance = 0;
    //calling the event emitter into the object
    events.EventEmitter.call(this);

    //creating the deposit function that emits a balanceChanged event
    this.deposit = function(amount){
        this.balance += amount;
        this.emit('balanceChanged');
    }
}