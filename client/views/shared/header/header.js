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

	'click #add-listing': function(){
		console.log("clicked");
		$('.test.modal').modal('show');
		UI.render(Template.AddListing); 
	}


})