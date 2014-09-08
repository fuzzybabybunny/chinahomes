Template.ShowListing.helpers({

  'Listing': function(){
    return Session.get('myListing');
  },

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