function mainArrSum() {
    //var n = parseInt(readLine());
    var n = prompt('Ingrese el array de numeros: ');
    //arr = readLine().split(' ');
    var arr = n.split(' ');
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