"use strict";

console.log("Show Me the Cupcakes");

let Handlebars = require("hbsfy/runtime"),
	cakeInventory = require("./bakery.js"),
	cakeTemplate = require("../templates/cake-grid.hbs"),
	eventStuff = require("./events.js"),
	welcomeTemplate = require("../templates/welcome.hbs"),
	welcomeData = require("../templates/welcome-data.js");
							//when it sees this helper, it expects a value to be put in and to parse the value and add 1 to it
Handlebars.registerHelper("increment", (value) => parseInt(value) + 1);

$("#welcome").append(welcomeTemplate(welcomeData)); //in the index go find the welcome id then append this template and data

function populatePage(stuff){
	//make a div to hold rendered html
	let newDiv = document.createElement("div");
	console.log("popPage", newDiv);
	newDiv.innerHTML = cakeTemplate(stuff);
	$("#cake-cards").append(newDiv);
	eventStuff();
}

cakeInventory.loadInventory()
.then(
	(inventoryFromLoadInventoryResolve) => {
		console.log("cake promise", inventoryFromLoadInventoryResolve);
		populatePage(inventoryFromLoadInventoryResolve);
	},
	(reason) => {
		console.log("something went really wrong, sorry to break your heart");
	});

