function divideAndConquerSum() {
    var temp = [10,9,8,7,6,5,4,3,2,1];
    console.log(temp);
    var temp2 = mergeSort(temp)
    console.log(temp2);
}


function mSort(x, lo, hi, tmp) {
    if (lo >= hi) return;

    var midLeft = Math.floor((lo + hi) / 3);
    
    var midRight = midLeft * 2;

    var mid = Math.floor((lo + hi) / 2);
    //two
    //mSort(x, lo, mid, tmp);
    //mSort(x, mid + 1, hi, tmp);
    //merge(x, lo, mid, hi, tmp);



    //three
    mSort(x, lo, midLeft, tmp);
    
    //mSort(x, midLeft + 1, midRight, tmp);
    //console.log("right");

    mSort(x, midLeft + 1, midRight, tmp)
    mSort(x, midRight + 1, hi, tmp);
    
    merge(x, lo, midLeft, hi, tmp);
    //merge(x, lo, midRight, hi, tmp);

    
}

function mergeSort(x) {
    var tmp = [];
    mSort(x, 0, x.length - 1, tmp);
    return tmp;
}

function merge(x, lo, mid,  hi, tmp) {
    var a = lo, b = mid + 1;
    for (var k = lo; k <= hi; k++) {
        if (a <= mid && (b > hi || x[a] < x[b])) {
            tmp[k] = x[a++];
        } else {
            tmp[k] = x[b++];
        }
    }
    for (var k = lo; k <= hi; k++) {
        x[k] = tmp[k];
    }
}



divideAndConquerSum();