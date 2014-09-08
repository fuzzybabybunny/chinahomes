
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
  'click .reactive-table tr': function (event) {
    // set the blog post we'll display details and news for
    var post = this;
    console.log("clicked!");
    console.log(post);
    Session.set('post', post);
  },

});

Template.Index.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
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

/*****************************************************************************/
/* Index: Lifecycle Hooks */
/*****************************************************************************/
Template.Index.created = function () {
};

Template.Index.rendered = function () {

  var listings = Listings.find().fetch();

  var initialize = function() {

    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(34.2593804, 108.9672088)
    };

    var infoWindow = new google.maps.InfoWindow();

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    for(var i = 0; i < listings.length; i++){

      var lat = listings[i].geocode.lat;
      var lng = listings[i].geocode.lng;
      var listingLatlng = new google.maps.LatLng(lat, lng);
      var marker = new google.maps.Marker({
          position: listingLatlng,
          animation: google.maps.Animation.DROP,
          map: map,
          title: listings[i].title,
          // Storing the content of the infoWindow into the marker itself
          content: listings[i].description
      });
      google.maps.event.addListener(marker, 'click', function(){
        // "this" is the particular marker that was clicked
        // console.log("this");
        // console.log(this);        
        infoWindow.setContent(this.content);
        infoWindow.open(map, this);
      });

    };

  };

  initialize();

};

Template.Index.destroyed = function () {
};

