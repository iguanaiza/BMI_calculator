/**
https://github.com/wswieciekodu/ChristmasChallenge
Christmas Challenge @wswieciekodu
     * Day 1.
     * Santa must visit 3 cities with coordinates (1,1), (4,5), (11,5) in the order given.
     * Santa takes off from point(1,1) from under the gas station ;)
     * For 10 units of distance his sleigh uses 20 liters of magic fuel.
     * How much fuel does he need for the entire route? To count, prepare the corresponding code.
     * The calculated result write on the screen.
     *
     * Calculate the distance between cities in the code, and then calculate the necessary amount of fuel.
     * To calculate the distance, prepare the appropriate function.
     * For mathematical calculations use functions from your language library.
*/

function dystans(x1, y1, x2, y2) {
    
    let y = x2 - x1;
    let x = y2 - y1;
    
    return Math.sqrt(x * x + y * y);
}

const miasto1 = {x:1, y:1};
const miasto2 = {x:4, y:5};
const miasto3 = {x:11, y:5};

var paliwo = (dystans(miasto1.x, miasto1.y, miasto2.x, miasto2.y) + dystans(miasto2.x, miasto2.y, miasto3.x, miasto3.y)) * 20 /10;

console.log(paliwo);
