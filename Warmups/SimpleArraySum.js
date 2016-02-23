function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    console.log(arrSum(arr));
}

function arrSum(arr){
    var ret = 0;
    for(var i = 0 ; i < arr.length ; i++){
        ret += arr[i];
    }
    return ret;
}