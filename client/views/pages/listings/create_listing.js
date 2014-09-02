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

};


Template.CreateListing.events({

  'click #add-listing-button': function(){
    console.log("submitted!");
  }

});