Listings = new Meteor.Collection('listings');

Listings.allow({
	update: ownsDocument,
	remove: ownsDocument
});

Meteor.methods({

	list: function(listingAttributes){
		var user = Meteor.user();
		var listingWithSameAddress = Listings.findOne({fullAddress: listingAttributes.fullAddress});

		if(!user){
			throw new Meteor.Error(401, "You need to login to create new listings.");
		};
		if(!listingAttributes.address1){
			throw new Meteor.Error(422, "Please full in the address.");
		};
		if(listingAttributes.fullAddress && listingWithSameAddress){
			throw new Meteor.Error(302, "This property has already been listed.", listingWithSameAddress._id);
		};

		var listing = _.extend(listingAttributes, {
			agentId: user._id,
			submitted: new Date().getTime()
		});

		var listingId = Listings.insert(listing);

		return listingId;

	}



});