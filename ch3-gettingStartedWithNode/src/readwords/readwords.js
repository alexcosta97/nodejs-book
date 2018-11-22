var censor = require("censorify");

//Testing censorify with the default words
console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad, bad and mad text."));

//Adding more words to censorify and testing
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("A very gloomy day"));