function palindrome(str) {
  str = str.replace(/\./g,'').replace(/\, /g,'').replace(/ /g,"").replace(/[^A-Z0-9]/ig, "").toLowerCase();
  
  var pal_str = str.split('').reverse('').join('');
  if (str == pal_str)   {
    return true;
  } else { 
    return false;
  }
}

//testing
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("0_0 (: /-\ :) 0-0");
