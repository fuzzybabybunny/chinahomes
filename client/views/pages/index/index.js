
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
  // listings = Listings.find().fetch();
  // console.log("listings:");
  // console.log(listings);
  var initialize = function() {
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(34.2593804, 108.9672088)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  };

  initialize();

  var createInfoWindow = function(marker, i) {
    // console.log(i);
    // console.log("listings[i]");
    // console.log(listings[i]);

    var infowindow = new google.maps.InfoWindow({
      content: listings[i]["title"]
    });

    google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.open(marker.get('map'), marker);
      // console.log(marker);
      // console.log(infowindow);
    });
  };

  // for (var i = 0; i < listings.length; i++){
  //   var address;
  //   var fullAddress = listings[i].fullAddress;
  //   console.log("fullAddress:");
  //   console.log(fullAddress);
  //   var location = geocodeAddress(fullAddress);
  //   console.log("location right before marker:");
  //   console.log(location);
  //   var marker = new google.maps.Marker({
  //       map: map,
  //       title: address,
  //       position: location
  //   });

  //   // console.log("marker");
  //   // console.log(marker);
  //   createInfoWindow(marker, i);

  // };

};

Template.Index.destroyed = function () {
};
