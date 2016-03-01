function largestOfFour(arr) {
  var value = 0, biggest = [0,0,0,0];     
  for(var i = 0; i < 4; i++){
    for(var j = 0; j < 4; j++){ 
        value = arr[i][j];
        if (value > biggest[i]) {
            biggest[i] = value;
        }
    }
}
  return biggest;
}

//testing
alert(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
alert(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
alert(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
