//Love calculator - random match %
let userName = prompt("What is your name?");
let crushName = prompt("What is your crush's name?");
let match = Math.floor(Math.random()*100)+1;

//console.log(match);

if (match === 100){
    alert(userName + " and " + crushName + " is " + match + "% match. You are just meant to be together.");
}

if (match < 100 && match >=90){
    alert(userName + " and " + crushName + " is " + match + "% match. You are awesome!");
}

if (match <90 && match >= 70){
    alert(userName + " and " + crushName + " is " + match + "% match. That's pretty nice!");
}

if (match <70 && match >= 40){
    alert(userName + " and " + crushName + " is " + match + "% match.");
}

if (match <40 && match >0){
    alert(userName + " and " + crushName + " is " + match + "% match. Well, maybe think about it again?");
}

if (match === 0){
    alert(userName + " and " + crushName + " is " + match + "% match. Definitely NOT. Run!");
}
