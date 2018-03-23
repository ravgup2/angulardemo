app.filter('revName', function() {
	return function(name) {
    var output;
    if(name){
      output= [];
      name = name.split(' ');
        for(var i = name.length; i >= 0; i-- ){
          output.push(name[i]);
        }
      return output.join(' ');
    }

    return name;
  }
});