# Getting started with Node
Node was developed in 1009 as an answer to the frustratino caused by concurrency issues in web services. Google had just come up with the V8 engine, which was highly optimized for web traffic. Ryan Dahl created Node on top of the V8 engine as a server-side environment that matches the client-side environment in the browser.

Node has a great ecosystem with new extensions being written all the time. The environment is clean and easy to install, configure and deploy.

Node can be used for a variety of purposes and its most common use is as a webserver. However, it can be used for a variety of other web services such as RESTful APIs, real-time multiplayer games and multiclient communication.

Node comes with many built-in modules available right out of the box, such as Buffer (which enables interactino with TCP streams and file system communication), Console (which gives the user a debugging console), Crypto(which allows for the creation of custom encryption) and others.

## Installing Node
In order to install node, follow the guides in [Node's website](http://nodejs.org).

In the installation location, we will see a couple of executable files and a `node_modules` folder. The node executable file starts the JavaScript VM. NPM is the command used to manage Node packages and `node_modules` is the folder that contains the installed Node packages.

## Working with Node Packages
One of the most powerful features of Node is the ability to be easily extended by using additional Node Packaged Modules. We use the Node Package Manager (NPM) to install those modules.

### What are Node Packaged Modules?
A module is a packaged library that can be shared, reused and installed in different projects. There are many modules for a different variety of purposes. They are created by different third-party organizations to provide the features that Node lacks out of the box. 