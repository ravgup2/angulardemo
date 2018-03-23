app.filter('customCurrency', function() {
	return function(number) {

    var output, lakh, thousand,reminder;

    // Do filter work here
    if(isNaN(number) || number < 1) {

      // If the data is not a number or is less than one (thus not having a cardinal value) return it unmodified.
      return number;

    } else {
      if(number >= 100000) { 
        lakh = (number/100000).toFixed(0);
        thousand = ((number - lakh*100000) /1000).toFixed(0);
        reminder = number - (lakh * 100000) + (thousand * 1000);

      } else if (number >= 1000){
        thousand = number/1000;
        thousand = ((number - lakh*100000) /1000).toFixed(0);
      } else {

      }
    	 
    }
    output += (lakh) ? lakh + "," : '';
    output += (thousand) ? thousand + ",000" : '';
    output += reminder;
    return output;

  }
});