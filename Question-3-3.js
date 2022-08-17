//4)

    var arr=[1,35,6,61,34,4,32]
    
    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    console.log(`max number is :${max} and its index is ${maxIndex}`);


      