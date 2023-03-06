/**
https://github.com/wswieciekodu/ChristmasChallenge
Christmas Challenge @wswieciekodu
     * Day 2.
     * Santa decided to enlist the help of modern technology this year.
     * Instead of wondering to whom what gift to deliver he decided to use the program.
     * Help Santa!
     * Prepare a code that will draw 3 gifts from the list of available gifts and write them on the screen.
     * Start the program several times - check if it is sure to draw different gifts each time!
     * List the drawn gifts on the screen. Make sure that the drawn gifts are unique.
*/

let gifts = [ "Perfume", "Socks", "Sweater", "Cup", "Hat", "Tea", "Coffee", "Clock", "Bag", "Book", "Wallet", "Cream", "Earrings"];

function randomGifts(list) {

    let a = list.length;
    let x = Math.floor(Math.random()*a);
    let y = Math.floor(Math.random()*a);
    let z = Math.floor(Math.random()*a);
    
    if (x != y && x != z && y != z) {
        
        return list[x] + ", " + list[y] + ", " + list[z];
        
    }
        
    else return randomGifts(list);
}

randomGifts(gifts);
