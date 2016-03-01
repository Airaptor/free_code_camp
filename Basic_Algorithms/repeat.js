function repeat(str, num) {
  // repeat after me
  var temp = str;
  if(num < 0){
    str = "";
  } else{
    for(var i = 1; i < num; i++){
    str += temp;
    }
  }
  return str;
}

//testing
alert(repeat("*", 3));
alert(repeat("abc", 3));
alert(repeat("abc", 4));
alert(repeat("abc", 1));
alert(repeat("*", 8));
alert(repeat("abc", -2));
