Template.test.rendered = function(){

// var promise = new Promise(function(resolve, reject) {
//   // do a thing, possibly async, then…

//   var stuff = 4;

// if (!!stuff/* everything turned out fine */) {
//     resolve("Stuff worked!");
//   }
//   else {
//     reject(Error("It broke"));
//   }
// });

// promise.then(function(result) {
//   console.log(result); // "Stuff worked!"
// }, function(err) {
//   console.log(err); // Error: "It broke"
// });


geocodeAddress = function(streetAddress){

	var geocodeObject = new Promise(function(resolve, reject) {

		// async call to Google's Geocoder - takes street address
		// and returns GPS coordinates
	  var gpsPosition = {};
	  geocoder = new google.maps.Geocoder();
	  if (geocoder) {
	  	// console.log("This is the address");
	  	// console.log(streetAddress);
	    geocoder.geocode({'address': streetAddress}, function(results, status) {
	      if (status == google.maps.GeocoderStatus.OK) {
	        if (results[0]) {
	          console.log("got results!");
	          gpsPosition.B = results[0].geometry.location['B'];
	          gpsPosition.k = results[0].geometry.location['k'];
	          console.log(gpsPosition);
	          resolve(gpsPosition);
	        } else {
	          alert("No results found");
	          reject(Error("It broke"));
	        }
	      } else {
	        alert("Geocoder failed due to: " + status);
	        reject(Error("It broke"));
	      }
	    });
	  }

	});

	geocodeObject.then(function(result) {
		console.log("This is the gpsPosition");
		console.log(result); // this console logs the result just fine
	  return result; // however the result can't be returned
	}, function(err) {
	  console.log(err); // Error: "It broke"
	});

}




};