var userName = prompt("Hello.\n Welcome to Buy 'Bladerunner'.\n Before we begin, what is your name?");
var inventory = [];
var schillings = (Math.random()*100);
var item1 = {
	name:"Bladerunner VHS",
	price:1
};
var item2 = {
	name:"Bladerunner DVD",
	price:50
};
var item3 = {
	name:"Bladerunner Bluray",
	price:75
};
var formatMenuItem = function(itemNumber, item){
	var menuItem = itemNumber+ ". " + item.name+ ": " + item.price + " schilling";
	if (item.price !== 1) {
		menuItem = menuItem + "s";
	}
	return menuItem + "\n";
}
var tryToBuyItem = function(item) {

	if(schillings < item.price)
	{
		alert("No schillings, scram punk");
	}
	else
	{
		itemSelection = item.name;
		schillings = schillings - item.price;
		inventory.push(item.name);
	}
}

alert(userName + " you walk up to a store with " + schillings +" schillings. You are hoping to buy some copies of Bladerunner.");
var menuString = " Type the number of the selection you would like to buy:\n";
 menuString = menuString + formatMenuItem(1, item1);
 menuString = menuString + formatMenuItem(2, item2);
 menuString = menuString + formatMenuItem(3, item3);
var shopping = true
while(shopping){
	var numberSelection = prompt(menuString);
	var itemSelection;

	if(numberSelection === "1")
	{
		tryToBuyItem(item1);
	}
	else if(numberSelection === "2")
	{ 
		tryToBuyItem(item2);
	}
	else if(numberSelection === "3")
	{
		tryToBuyItem(item3);
	}

	alert("You have chosen " + itemSelection + " and you have " + schillings +" schillings");
	if(schillings <= 4){
		shopping = false;
	}
};
alert("Goodbye " + userName+ ". Today you bought " + inventory.join(", "));
