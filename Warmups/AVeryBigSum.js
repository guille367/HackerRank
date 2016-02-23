function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    console.log(arrSum(arr));
}

function arrSum(arr){
    var ret = 0;
    var sec_arr = [];
    
    for(var i = 0 ; i < arr.length ; i++){        
        var sec_arr = arr[i].toString().split(' ').map(Number);
        for(var m = 0 ; m < sec_arr.length ; m++){
            ret += sec_arr[m];
            }
    }
    return ret;
}
