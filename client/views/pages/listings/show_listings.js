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
      	{ key: 'fullAddress', label: 'Full Address' },
      	{ key: 'price', label: 'Price' },
      	{ key: 'bedrooms', label: 'Bedrooms' },
      	{ key: 'bathrooms', label: 'Bathrooms' }
      ],
      useFontAwesome: true
    };
  }

})