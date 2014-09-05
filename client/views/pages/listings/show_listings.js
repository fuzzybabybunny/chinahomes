Template.ShowListings.helpers({

	'Listings': function(){
		if (!!Meteor.user()) {
			return Listings.find({agentId: Meteor.user()._id});	
		};
	}

})