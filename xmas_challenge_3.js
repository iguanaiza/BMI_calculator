/**
https://github.com/wswieciekodu/ChristmasChallenge
Christmas Challenge @wswieciekodu
     * Day 3.
     * Santa decided to enlist the help of modern technology this year.
     * Instead of buying a Christmas tree and ornaments, he decided to use those generated in the console (terminal).
     * Help Santa! Prepare the code that will write a Christmas tree on the screen.
     * If you can, do not write the tree directly in printy - mess with loops.
     * Prepare a function that takes the height of the Christmas tree and prints the tree on the screen.
     * So that the Christmas tree generates itself! The Christmas tree can simply be a triangle, or it can be composed of several layers. :)
*/

function xmasTree(height) {

    for (let i = 0; i < height; i++) {
        
        for (let j=height-1; j>i; j--) {
            
           document.write("&nbsp&nbsp");
           
        }
        
        for (let k=0; k<=(i*2); k++) {
      
           document.write("*");
   
        }
   
        document.write("<br>");
    }

}

xmasTree(10);
