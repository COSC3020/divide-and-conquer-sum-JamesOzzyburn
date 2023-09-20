function divideAndConquerSum(arr) {  //Gage helped me with this
    if (arr.length == 0) { //If the array has no elements just return 0
        return 0;
    }

    if (arr.length == 1) { //If the array has only one element just return that
        return arr[0];
    }

    var mid1 = Math.floor(arr.length/3); // Find the left middle point where we cut the array
    var mid2 = Math.floor((mid1 + arr.length) / 2) // Find the right middle point where we cut the array

    //This gets the first third                     This gets the 2nd third                         This get the 3rd third
    return divideAndConquerSum(arr.slice(0, mid1)) + divideAndConquerSum(arr.slice(mid1, mid2)) + divideAndConquerSum(arr.slice(mid2))
}
