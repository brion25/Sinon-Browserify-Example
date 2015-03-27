Unit Test with Browserify and Sinon
-------

Hi Guys, I hope this example could help you. The example is about how to test a function...framework agnostic!

> Framework agnostic: The basic app could be configured to run in any framework which handles promises, like: Angular, Backbone, etc.

The app is composed by 2 services:

 1. To fetch my public plunks
 2. To search repositories on github

But that's not the important thing, the important thing is what is inside the folder `unit` . Inside this folder you will see the file `test-factory.js` which have 2 `specs` 1 to test the service to fetch my plunks and the other one to test the search function.

Please review the file and well, if you have doubts, don't hesitate and ask!