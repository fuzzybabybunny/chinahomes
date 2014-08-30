
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

  listings = Listings.find().fetch();
  console.log(listings);

  var initialize = function() {
    geocoder = new google.maps.Geocoder();
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(34.2593804, 108.9672088)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  };

  initialize();

  Deps.autorun(function() {
    listings = Listings.find().fetch();
    console.log(listings);

    for (var i = 0; i < listings.length; i++){

      console.log("In the loop");

      console.log(listings[i].fullAddress);

      function codeAddress() {
        var address = listings[i].fullAddress;
        geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      };

      codeAddress();

      console.log(listings[i].fullAddress);
      // console.log(listing.address1);
    };

  });

};

Template.Index.destroyed = function () {
};


