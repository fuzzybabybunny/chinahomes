Template.ShowListings.helpers({

	'ListingItem': function(){
		if (!!Meteor.user()) {
			return Listings.find({agentId: Meteor.user()._id});
		};
	}

})