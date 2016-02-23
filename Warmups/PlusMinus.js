/* Given an array of integers, calculate which fraction of the elements are positive, negative, and zeroes, respectively. Print the decimal value of each fraction.

Input Format

The first line, NN, is the size of the array. 
The second line contains NN space-separated integers describing the array of numbers (A1,A2,A3,⋯,ANA1,A2,A3,⋯,AN).

Output Format

Print each value on its own line with the fraction of positive numbers first, negative numbers second, and zeroes third.

Sample Input

6
-4 3 -9 0 4 1         
Sample Output

0.500000
0.333333
0.166667
Explanation

There are 3 positive numbers, 2 negative numbers, and 1 zero in the array. 
The fraction of the positive numbers, negative numbers and zeroes are 36=0.50000036=0.500000, 26=0.33333326=0.333333 and 16=0.16666716=0.166667, respectively.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10−410−4 are acceptable.
*/

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    plusMinusZero(arr);
}

function plusMinusZero(arr){
    
    var pos = 0;
    var negs = 0;
    var zeros = 0;
    for(var i = 0; i < arr.length ; i++){
        if(arr[i] > 0)
            pos++;
        else if(arr[i] < 0)
            negs++;
        else
            zeros++;
    }
    
    console.log(pos/arr.length);
    console.log(negs/arr.length);
    console.log(zeros/arr.length);
}
