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
	}


})