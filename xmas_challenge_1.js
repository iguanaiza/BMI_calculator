/**
https://github.com/wswieciekodu/ChristmasChallenge
Wyzwanie Świąteczne @wswieciekodu
     * Dzień 1
     * Mikołaj musi odwiedzić 3 miasta o współrzędnych (1,1), (4,5), (11,5) w podanej kolejności.
     * Mikołaj startuje z punktu(1,1) spod stacji paliw ;)
     * Na 10 jednostek odległości jego sanie zużywają 20 litrów magicznego paliwa.
     * Ile paliwa potrzebuje na całą trasę? Do policzenia przygotuj odpowiedni kod.
     * Obliczony wynik wypisz na ekranie.
     *
     * Oblicz w kodzie dystans miedzy miastami, a nastepnie policz niezbedną ilosc paliwa.
     * Do obliczenia dystansu przygotuj odpowiednią funkcję.
     * Do obliczeń matematycznych użyj funkcji z biblioteki Twojego jezyka.
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
