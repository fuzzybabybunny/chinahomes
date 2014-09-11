Template.ShowListing.helpers({

  'Listing': function(){
    return Session.get('myListing');
  },

  'ListingImages': function(){
    var imageIdsArray = Session.get('myListing').imageIds;
    var listingImagesArray = [];
    var imageURL = "";
    for (var i = 0; i < imageIdsArray.length; i++) {
      console.log(ListingImages.findOne(imageIdsArray[i]).url());
      imageURL = ListingImages.findOne(imageIdsArray[i]).url();
      listingImagesArray.push(imageURL);
    }
    console.log(listingImagesArray);
    return listingImagesArray;
  }

});

Template.ShowListing.events({

  // 'click .reactive-table tr': function (event) {
  //   // set the blog post we'll display details and news for
  //   var post = this;
  //   console.log(post);
  //   Session.set('post', post);
  // },

});

Template.ShowListing.rendered = function(){

  console.log("rendered!");


};