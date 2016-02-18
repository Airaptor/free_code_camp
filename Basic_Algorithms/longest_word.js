function findLongestWord(str) {
  
size = str.split(" ").length;

var temp = 0, i=0, biggest = 0;
for (i = 0; i < size; i++  )
{
  temp = (str.split(" ")[i]).length;
  if (biggest < temp)
  {
    biggest = temp;
  }
}
  return biggest;
}

//testing
findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("Google do a barrel roll");
findLongestWord("What is the average airspeed velocity of an unladen swallow");
findLongestWord("What if we try a super-long word such as otorhinolaryngology");
