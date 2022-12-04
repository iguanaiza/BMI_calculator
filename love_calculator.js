//Love calculator - random match %
var userName = prompt("What is your name?");
var crushName = prompt("What is your crush's name?");
var match =Math.random()*100;
match = Math.floor(match)+1;
//console.log(match);
alert(userName + " and " + crushName + " is " + match + "% match.");
