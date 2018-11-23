# Callbacks
As we've seen in previous sections, the event-driven model relies heavily in callback functions. Callback function can be a bit difficult to understand at first, especially if we want to depart from implementing a basic anonymous function. This section deals with three specific implementations of callbacks: passing parameters to a callback function, handling callback function parameters inside a loop and nesting callbacks.

## Passing Additional Parameters to Callbacks
Most callbacks have automatic parameters passed to them, such as an error or result buffer. A common question when working with callbacks is how to pass additional parameters to them from the calling function. We do this by implementing the parameter in an anonymous function and then call the actual callback with parameters from the anonymous function.

`callback_parameters.js` illustrates implementing callback parameters. There are two sawCar event handlers. The sawCar event only emits the make parameters. `emitter.emit()` can also accept additional parameters; in this case, make is added as shown in line 5. The first event handler on line 16 implements the `logCar(make)` callback handler. To ass a color for `logColorCar()`, an anonymous function is used in the event handler defined in lnes 17-21. A randomly selected color is passed to the call `logColorCar(make, color)`.

## Implementing Closure in Callbacks
An interesting problem that asynchronous callbacks have is that of closure. Closure is a JavaScript term that indicates that variables are bound to a function's scope and not the parent function's scope. When we execute an asynchronous callback, the parent's function scope may have changed; for example, when iterating through a list and altering values in each iteration.

If our callback needs access to variables in the parent function's scope, then we need to provide closure so that those values are available when the callback is pulled off the event queue. A basic way of doing that is by encapsuling the asynchronous call inside a function block and passing in the variables that are needed.

`callback_closure` implements a wrapper function that providers closure to the logCar asynchronous function. The loop in lines 7-12 implements a basic callback. However, the output of the program shows that the car name is always the last item read because the value of message changes each time through the loop.

The loop in lines 13-20 implements a wrapper function that is passed message as the msg parameter and that msg value sticks with the callback. Thus the closure shown in the outuput displays the correct message. To make the callback truly asynchronous, the `process.nextTick()` method is used to schedule the callback.

## Chaining Callbacks