function requestlicences(email,numlicences){
	var regupv = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@.*upv.*.es$/
	var regupvnet = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@.*upv.*.es$/
	
	if (regupv.test(email) || regupvnet.test(email)){
		var settings = {
		  "url": "https://edxcovid19.webs.upv.es/licences/request",
		  "method": "POST",
		  "timeout": 0,
		  "headers": {
			"Content-Type": "application/x-www-form-urlencoded"
		  },
		  "data": {
			"email": email,
			"number": numlicences.toString()
		  }
		};

		$.ajax(settings).done(function (response) {	  
				window.alert(response);
			});
	}
	else{
	 window.alert("El dominio del correo no es válido");
	}
}