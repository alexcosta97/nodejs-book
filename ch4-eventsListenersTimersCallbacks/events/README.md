# Events
Example of how to implement event emitters and listeners in Node.js using a simulation of a bank account withdraw and deposit.

## Adding Custom Events to our JavaScript objects
Events are emitted using an `EventEmitter` object. The object is included in the events module. The emit function triggers the `eventName` event and includes any arguments provided. The following code sniptper shows how to implement a simple event emitter:
```javascript
var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit("simpleEvent");
```

Occasionally we want to add events directly to our JavaScript objets. To do that we need to inherit the EventEmitter functionality in our object by calling `events.EventEmitter.call(this)` in our object's instantiation as well as adding the `events.EventEmitter.prototype` to our objects prototyping.

We can then emit events directly from instances of our objets.

## Adding Event Listeners to Objects
Once we have an instance of an object that can emit events, we can add listeners for the events that we care about. Listeners are added to an EventEmitter object using one of the following functions:
* `.addListener(eventName, callback)`: Attaches the callback function to the object's listener. Every time the `eventName` is triggered, the callback function is placed in the event queue to be executed.
* `.on(eventName, callback)`: Same as the previous.
* `.once(eventName, callback)`: Only the first time the eventName event is triggered, the callback function is placed in the event queue to be executed.

For example, to add an event listener to an instance of MyObject we would use the following:
```javascript
function myCallback(){
    ...
}
var myObject = new MyObj();
myObject.on("someEvent", myCallback);
```

## Removing Listeners from Objects
Listeners are useful and viral parts of Node programming. However, they do cause overhead, and we should use them only when necessary. Node provides server helper functions on the `EventEmitter` object that allow us to manage the listeners that are included. These include:
* `.listeners(eventName)`: Returns an array of listener functions attached to the eventName event
* `.setMaxListeners(n)`: Triggers a warning if more than n listeners are added to an EventEmitter object. The default is 10.
* `.removeListener(eventName, callback)`: Removes the callback function from the eventName event of the EventEmitter object.

## Implementing Event Listeners and Event Emitters
The follow piece of code demonstrates the process of implementing listeners and custom event emitters in Node. The `Account` object is extended to inherit from the `EventEmitter` class and provides two methods to deposit and withdraw that both emit the `balanceChanged` event. Then three callback functions are implemented that are attached to the event and display various forms of data. The `checkGoal()` callback is implemented a bit differently than the others to illustrate how to pass variables into an event listener function when the event is triggered.
```javascript
var events = require('events');

function Account(){
    this.balance = 0;
    events.EventEmitter.call(this);
    this.deposit = function(amount){
        this.balance += amount;
        this.emit('balanceChanged');
    };
    this.withdraw = function(amount){
        this.balance -= amount;
        this.emit('balanceChanged');
    };
}

Account.prototype._proto_ = events.EventEmitter.prototype;
function displayBalance(){
    console.log("Account balance: $%d", this.balance);
}
function checkOverdraw(){
    if(this.balance < 0){
        console.log("Account overdrawn!!!");
    }
}
function checkGoal(acc, goal){
    if(acc.balance > goal){
        console.log("Goal Achieved!!!");
    }
}

var account = new Account();
account.on("balanceChanged", displayBalance);
account.on("balanceChanged", checkOverdraw);
account.on("balanceChanged", function(){
    checkGoal(this, 1000);
});

account.deposit(220);
account.deposit(320);
account.deposit(600);
account.withdraw(1200);
```

Next: [Callbacks](../callbacks/README.md)