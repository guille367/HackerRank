/* Your teacher has given you the task of drawing a staircase structure. Being an expert programmer, you decided to make a program to draw it for you instead. Given the required height, can you print a staircase as shown in the example?

Input 
You are given an integer NN depicting the height of the staircase.

Output 
Print a staircase of height NN that consists of # symbols and spaces. For example for N=6N=6, here's a staircase of that height:

     #
    ##
   ###
  ####
 #####
######
Note: The last line has 0 spaces before it.
*/

function main() {
    var n = parseInt(readLine());
    printStair(n);
}

function printStair(cant){
    var lines = cant - 1;
    var str = "";
    
    for(var i = 1 ; i <= cant ; i ++){
        var str = ""
        for(var j = 0; j < lines; j++)
            str += " ";
    
        for(var m = 0 ; m < cant-lines; m++)
            str += "#";
    
        console.log(str);
        lines--;
    }
    
}
