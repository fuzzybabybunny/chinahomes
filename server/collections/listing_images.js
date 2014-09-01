Meteor.publish('listingImages', function() {
  return ListingImages.find();
});