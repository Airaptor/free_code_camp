function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var lengthString = str.length-1;
  var StringMinusTargetLength = str.length - target.length;
  
  if(str[lengthString] == target){
    str = true;
  } else if(str.substr(StringMinusTargetLength, lengthString) === target) {
     str = true;
   } else {
    str = false;
  }
  return str;
}

//testing
alert(end("Bastian", "n"));
alert(end("Connor", "n"));
alert(end("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
alert(end("He has to give me a new name", "name"));
alert(end("He has to give me a new name", "me"));
alert(end("He has to give me a new name", "na"));
alert(end("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
