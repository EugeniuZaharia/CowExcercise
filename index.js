var cowsay = require("cowsay");
let quote = require(`./information`);
console.log(cowsay.say({
	text : quote.hei,
}));