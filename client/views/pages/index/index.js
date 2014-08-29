
/*****************************************************************************/
/* Index: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Index.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Index.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Index: Lifecycle Hooks */
/*****************************************************************************/
Template.Index.created = function () {
};

Template.Index.rendered = function () {

    var listings = Listings.find().fetch();
    for (var i = 0; i < listings.length; i++){
      console.log(listings[i].address1);
      // console.log(listing.address1);
    }

    // Declaring a new function called 'initialize'
    function initialize() {
      var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(34.2593804, 108.9672088)
      };

      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      new google.maps.Marker({
        position: new google.maps.LatLng(22.400053, 114.192587),
        map: map,
        title: 'Insight Robotics'
      });

    }

    // Got rid of Gmap's Window Load event listener - not needed with Meteor's
    // Template.footprint.rendered since this code will only run when the 
    // template is rendered (and by extension, the window is loaded).
    initialize();

};

Template.Index.destroyed = function () {
};


