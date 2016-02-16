function findLongestWord(str) {
  
size = str.split(" ").length;
  
var length1 = 0, j=0;
for (var i = 0; i<=size; i++  )
{length = text.split(" ")[i].length;
  if (length1 <= length){
    length1 = length;
    j=i;      }}
  str = str[j];
  return str.length;
}
//test
findLongestWord("The quick brown fox jumped over the lazy dog");

