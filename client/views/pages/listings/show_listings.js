Template.ShowListings.helpers({

	'Listings': function(){
		if (!!Meteor.user()) {
			return Listings.find({agentId: Meteor.user()._id});	
		};
	},

  'settings': function () {
    return {
      rowsPerPage: 10,
      showFilter: true,
      fields: [
      	{ key: 'fullAddress', label: 'Address' },
      	{ key: 'price', label: 'Price' },
      	{ key: 'bedrooms', label: 'Beds' },
      	{ key: 'bathrooms', label: 'Baths' }
      ],
      useFontAwesome: true
    };
  }

});

Template.ShowListings.events({

  // 'click .reactive-table tr': function (event) {
  //   // set the blog post we'll display details and news for
  //   var post = this;
  //   console.log(post);
  //   Session.set('post', post);
  // },

});

Template.ShowListings.rendered = function(){

  console.log("rendered!");

  // $('.reactive-table tr').click(function(){
  //   console.log("clicked");
  // });

  $('.reactive-table tr').click(function(event){
    console.log("clicked");
    var post = this.data;
    console.log(post);
    Session.set('post', post);
  });


};