Template.CreateListing.rendered = function(){

	// if (Meteor.isClient){

	// 	Dropzone.autoDiscover = false;

	// 	//Adds file uploading and adds the imageID of the file uploaded
	// 	//to the petInfo object.
	// 	var dropzone = new Dropzone("div#dropzone", {
	// 		accept: function(file, done){
	// 			ListingImages.insert(file, function(err, fileObj){
	// 				if(err){
 //            alert("Error");
	// 				} else {
	// 					var fileId = fileObj._id;
	// 					// petInfo.imageIds.push(fileId);
	// 				};
	// 			});

	// 		}
	// 	});

	// };

	// $('#add-listing-button').click(
	// 		function(){
	// 			console.log("clicked");
	// });

	$('form').submit(function(e, t){
		e.preventDefault();
		console.log("submitted on rendered callback!");

		var listingSubmission = {
			address1: $(e.target).find('[name=address1]').val(),
			address2: $(e.target).find('[name=address2]').val(),
			city: $(e.target).find('[name=city]').val(),
			province: $(e.target).find('[name=province]').val(),
			bedrooms: parseInt( $(e.target).find('[name=bedrooms]').val() ),
			bathrooms: parseInt( $(e.target).find('[name=bathrooms]').val() ),
			interiorSize: parseInt( $(e.target).find('[name=interiorSize]').val() ),
			exteriorSize: parseInt( $(e.target).find('[name=exteriorSize]').val() ),
			price: parseInt( $(e.target).find('[name=price]').val() * 100 ),
			title: $(e.target).find('[name=title]').val(),
			description: $(e.target).find('[name=description]').val()
		};
		console.log(listingSubmission);

		var createFullAddress = function(addressHash){

			if (!!addressHash.address2){
				var fullAddress = addressHash.address1 + ", "
													+ addressHash.address2 + ", "
													+ addressHash.city + ", "
													+ addressHash.province + ", China";
			} else {
				var fullAddress = addressHash.address1 + ", "
													+ addressHash.city + ", "
													+ addressHash.province + ", China";
			}

			return fullAddress;

		};

		listingSubmission.fullAddress = createFullAddress(listingSubmission);

		console.log(listingSubmission);

		var listingID = Listings.insert(listingSubmission);

		// GEOCODE SECTION

		geocodeAddress = function(streetAddress) {

		    new Promise(function(resolve, reject) {

		      // async call to Google's Geocoder - takes street address
		      // and returns GPS coordinates

		      var geocoder = new google.maps.Geocoder();
		      geocoder.geocode({'address': streetAddress}, function(results, status) {
		        if (status == google.maps.GeocoderStatus.OK) {
		          if (results[0]) {
		            resolve({lng: results[0].geometry.location['B'],
		                     lat: results[0].geometry.location['k']});
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
		  Listings.update({_id: listingID}, {$set: {geocode: result}});
		};

		geocodeAddress(listingSubmission.fullAddress);

	});



};

//These will NOT work if CreateListing is a modal b/c 
//Semantic removes modal from the DOM
Template.CreateListing.events({

  // 'submit form': function(e, t){
  // 	e.preventDefault();
  //   console.log("submitted in events!");
  // }

});