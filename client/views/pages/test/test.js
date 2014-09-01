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
// geocodeAddress = function(streetAddress){

//   var geocodeObject = new Promise();

//   // return the promise
//   return geocodeObject.then(function() {});
// };

// // use the geocodeAddress as a promise
// var geoAddressPromise = geocodeAddress('alasjdf');
// geoAddressPromise.then(function() {
//    // put your code here instead of the next line.
// });

// geocodeAddress = function(streetAddress){

// 	geocodeObject = new Promise(function(resolve, reject) {

// 		// async call to Google's Geocoder - takes street address
// 		// and returns GPS coordinates
// 	  var gpsPosition = {};
// 	  geocoder = new google.maps.Geocoder();
// 	  if (geocoder) {
// 	  	// console.log("This is the address");
// 	  	// console.log(streetAddress);
// 	    geocoder.geocode({'address': streetAddress}, function(results, status) {
// 	      if (status == google.maps.GeocoderStatus.OK) {
// 	        if (results[0]) {
// 	          console.log("got results!");
// 	          gpsPosition.B = results[0].geometry.location['B'];
// 	          gpsPosition.k = results[0].geometry.location['k'];
// 	          console.log(gpsPosition);
// 	          resolve(gpsPosition);
// 	        } else {
// 	          alert("No results found");
// 	          reject(Error("It broke"));
// 	        }
// 	      } else {
// 	        alert("Geocoder failed due to: " + status);
// 	        reject(Error("It broke"));
// 	      }
// 	    });
// 	  }

// 	});

// 	geocodeObject.then(function(result) {
// 		console.log("This is the gpsPosition");
// 		console.log(result); // this console logs the result just fine
// 	  return result; // however the result can't be returned
// 	}, function(err) {
// 	  console.log(err); // Error: "It broke"
// 	});

// }

// newPromise = new Promise(function(resolve, reject){
// 	resolve(1);
// });

// newPromise.then(function(val){
// 	return val + 1;
// });

// promise = new RSVP.Promise(function(resolve, reject) {
//   // succeed
//   resolve("Hello");
//   // or reject
//   reject(error);
// });

// var result = promise.then(function(value) {
// 	// console.log(value);
// 	return value;
//   // success
// }, function(value) {
//   // failure
// });

// console.log(result);


// geocodeAddress = function(streetAddress){

//   var geocodeObject = new RSVP.Promise(function(resolve, reject){
//   	resolve(streetAddress);
//   	reject(error);
//   });

//   // return the promise
//   return geocodeObject.then(function() {});
// };

// // use the geocodeAddress as a promise
// var geoAddressPromise = geocodeAddress('alasjdf');
// geoAddressPromise.then(function(value) {
//    console.log(value);
// });

// geocodeAddress = function(streetAddress){

//   var geocodeObject = new RSVP.Promise();

//   // return the promise
//   return geocodeObject.then(function() {});
// };

// // use the geocodeAddress as a promise
// var geoAddressPromise = geocodeAddress('alasjdf');
// geoAddressPromise.then(function() {
// 	console.log(value);
//    // put your code here instead of the next line.
// });

	// myHash = {};

	// var promise = new RSVP.Promise(function(resolve, reject) {
	//   resolve(1);
	// });

	// return promise.then(function(val) {
	//   console.log(val); // 1
	//   myHash.firstKey = val;
	//   return myHash;
	// }).then(function(val) {
	//   console.log(val); // 3
	// });


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
};

geocodeAddress("1600 Amphitheatre Pkwy, Mountain View, CA 94043");


};

