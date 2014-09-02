Template.test.rendered = function(){

	geocodeAddress = function(streetAddress) {

	    new Promise(function(resolve, reject) {

	      // async call to Google's Geocoder - takes street address
	      // and returns GPS coordinates

	      var geocoder = new google.maps.Geocoder();
	      geocoder.geocode({'address': streetAddress}, function(results, status) {
	        if (status == google.maps.GeocoderStatus.OK) {
	          if (results[0]) {
	            resolve({B: results[0].geometry.location['B'],
	                     k: results[0].geometry.location['k']});
	          } else {
	            reject(Error("It broke"));
	          }
	        } else {
	          reject(Error("It broke"));
	        }
	      });
	    })
	    .then(
	      // this is the Promise resolve handler
	      function(result) {
	        handleGeocodeResult(result);
	      },
	      // this is the Promise reject handler
	      function(err) {
	        console.log(err); // Error: "It broke"
	      });
	};

	function handleGeocodeResult(result) {
	  // for illustration only... this function should actually
	  // *BE* the Promise resolve handler.
	  console.log("This is the gpsPosition");
	  console.log(result); // this console logs the result just fine
	  myResult = result;
	  return result;
	};

	geocodeAddress("1600 Amphitheatre Pkwy, Mountain View, CA 94043");

	var handleGeocodeResult = function(result) {
	  // for illustration only... this function should actually
	  // *BE* the Promise resolve handler.
	  console.log("This is the gpsPosition");
	  console.log(result); // this console logs the result just fine
	  myResult = result;
	  return result;
	};

};

