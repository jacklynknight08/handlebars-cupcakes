"use strict";

let inventory = [];
let bakery = {};

let fillInventory = (data) => {  //**THIS IS THE FUNCTION THAT RUNS THE DATA TO CONVERT TO AN ARRAY
	data.ccakes.forEach(function(element){
		inventory.push(element);
	});
};

bakery.getInventory = () => {  //this isn't active
	return inventory;
};

bakery.loadInventory = () => {
	return new Promise( function(resolve, reject){
		let inventoryLoader = new XMLHttpRequest();
		inventoryLoader.open("GET", "inventory.json");
		inventoryLoader.send();

		inventoryLoader.addEventListener("load", function(){
			var data = JSON.parse(this.responseText); //**run data through function to create an array
			//inventory = data; //**added .ccakes in line before and set the inventory = data to do the same as the function commented out
			resolve(data);
		});
	});
};

module.exports = bakery;