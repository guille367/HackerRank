/*

Given a square matrix of size N×NN×N, calculate the absolute difference between the sums of its diagonals.

Input Format

The first line contains a single integer, NN. The next NN lines denote the matrix's rows, with each line containing NN space-separated integers describing the columns.

Output Format

Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is: 
11
      5
            -12

Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:
            4
      5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19 
Difference: |4 - 19| = 15

*/

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    console.log(arrDif(a));
}

    function arrDif(arr){
    var res = 0;
    var first_diag = 0;
    var sec_diag = 0;
    var diag_pos = 0;

        for(var i = 0; i < arr.length ; i++){
            first_diag += arr[i][diag_pos];
            diag_pos ++;
        }
        
        diag_pos = 0;
        
        for(var i = arr.length -1 ; i >= 0 ; i--){
            sec_diag += arr[i][diag_pos]; 
            diag_pos ++;
        }
        res = first_diag - sec_diag;
        if(res < 0)
            res = (res*(-1));
    
    return res;
}