Template.header.rendered = function(){

	$('.ui.dropdown').dropdown();

	Deps.autorun(function(c) {
    if (Session.get('modalVisible')) {
        $('#myModal').modal('show'); 
    } else {
        $('#myModal').modal('hide');
    }
	});

};

Template.header.events({

	'click .ui.simple.dropdown.item': function(){
		console.log("clicked");
		$('.ui.right.styled.overlay.sidebar').sidebar({
    	overlay: false
  	})
  	.sidebar('toggle');
	},

	'click #create-listing': function(){
		console.log("clicked");
		$('#create-listing-modal').modal('show');
		// UI.render(Template.CreateListing); 
	},

	'click #my-listings': function(){
		$('#listings-sidebar.overlay.sidebar').sidebar({overlay: true}).sidebar('toggle');
	},

	'click #search-listings': function(){
		$('#search-sidebar.overlay.sidebar').sidebar({overlay: true}).sidebar('toggle');
	},





});

Template.header.helpers({

	// 'Listings': function(){
	// 	return Listings;
	// },
	
})