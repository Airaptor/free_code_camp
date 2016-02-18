function titleCase(str) {
  
  size = str.split(" ").length;

var temp = 0, i=0, str1="";
for (i = 0; i < size; i++  )
{
  temp = (str.split(" ")[i]);
  if (i < (size - 1))
  {
    str1 += temp.charAt(0).toUpperCase() + temp.slice(1).toLowerCase() + " " ;
  } else{
    str1 += temp.charAt(0).toUpperCase() + temp.slice(1).toLowerCase();
  }
	
}  
  return str1;
}

// testing
titleCase("I'm a little tea pot");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
titleCase("sHoRt AnD sToUt");
