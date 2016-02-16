function factorialize(num) {
  var i = 1, num1 = 1;
  while ( i <= num )  
  {
    num1 = i * num1;
    i = i + 1;
  }
  num = num1;
  return num;
}

//testing 
factorialize(5);
factorialize(10);
factorialize(20);
