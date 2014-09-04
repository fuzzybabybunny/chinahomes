Template.header.rendered = function(){

	$('.ui.dropdown').dropdown();

}

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
		console.log("clicked");
		$('#show-listings-modal').modal('show');
		// UI.render(Template.CreateListing); 
	}



})